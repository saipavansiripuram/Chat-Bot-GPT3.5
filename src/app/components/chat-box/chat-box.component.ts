import { Component } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent {
  textInput: string = '';
  chatHistory:any[] =[];
  constructor(private chatService: ChatService) {}

  handleChat() {
    if(this.textInput  === ''){
      return;
    }
    this.chatService.sendMessage(this.textInput).subscribe(res => {
      const reply = res.choices[0].message.content;
      console.log(reply)
      this.chatHistory.push({you: this.textInput , friend:reply});
    })
    // if (this.text.trim() === '') return;

    // this.chatService.sendMessage(this.text)
    //   .then(response => {
    //     // Handle the response, you can update your UI here
    //     console.log('AI Response:', response);
    //   })
    //   .catch(error => {
    //     // Handle errors
    //     console.error('Error:', error);
    //   });

    // Clear input after sending message
    // this.textInput = '';
  }
}
