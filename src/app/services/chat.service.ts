import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ChatService {
  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'Your  API Key';
  model = 'gpt-3.5-turbo-0613';

  constructor(private http: HttpClient) {}

  sendMessage(message: string): Observable<any> {
    // var  prompt = `As a friendly chatbot, I'm here to assist you. How can I help you today?`;
    const data = {
      // prompt:  `${prompt}${message}`,
      max_tokens: 50,
      model: this.model,
      messages: [
        {
          role: 'user',
          content: `Act as a chatbot of beauty parlour services and contact number is 093209832 and mail is beauty@gmail.com give reply to thisBeauty Parlor Services

          Contact Information:
          
          Phone Number: 093209832
          Email: beauty@gmail.com
          Services Offered:
          Elevate your wedding look with our professional makeup services. Choose from curated pre-bridal and bridal packages available in Silver, Gold, and Platinum tiers. Additionally, we offer a pre-groom package including haircut, beard trim, hair spa, facial, and manicure/pedicure.
          
          Location Options:
          Find us in Hyderabad (Jubilee Hills, Gachibowli, Hitex, Kokapet, Rainbow Vistas Rock Garden, Club Luxe My Home Bhooja), Vijayawada, Visakhapatnam, and Guntur.
          
          Groom Package

          Original Price :₹17250
          After Discount ₹14999
          Hair Cut with Senior Stylist  
          Beard Trim & Styling
          Express Ritual Kerastase Hair Spa
          Old School Ritual Facial
          Coffee and Cream/Tamarind and Mint Ritual Manicure and Pedicure

            Pre Bride Packages
          Silver
          Original Price ₹25,600
          After Discount ₹19999
          Threading (Eyebrow, Upper lip, Chin and Side Locks)
          Liposoluble waxing (Full arms, Full Legs, Under arms)
          Old School Ritual Facial
          Express Ritual Kerastase Hair Spa
          Coffee and Cream/Tamarind and Mint Express Ritual Manicure and Pedicure
          Carrot, Beet and Camphor Oil Ritual Full body Polishing



          Gold
          Original Price ₹28050
          After Discount  ₹21999
          Full Face Waxing (Cirepil)
          Liposoluble waxing (Full arms, Full Legs, Under arms)
          Old School Ritual Facial
          Express Ritual Kerastase Hair Spa
          Coffee and Cream/Tamarind and Mint Ritual Manicure and Pedicure
          Carrot, Beet and Camphor Oil Ritual Full body Polishing
          Gel Polish for hands


          Platinum
          Original Price  ₹31,200
          After Discount    ₹23999
          Full Face Waxing (Cirepil)
          Liposoluble waxing (Full Body)
          Old School Ritual Facial
          Express Ritual Kerastase Hair Spa
          Coffee and Cream/Tamarind and Mint Ritual Manicure and Pedicure
          Coffee and Cream Ritual Full body Polishing
          Gel Polish for 10 fingers
 





          Company Information:
          With over 20 years of experience in the beauty industry, we pride ourselves on expert stylists and therapists for each service. Starting as a salon, we've evolved into a luxury chain, with multiple salons offering hair care, skin care, bridal makeup, and nail art services. Join over 500 satisfied customers in our portfolio. ${message} `,
        },
      ],
    };
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    });

    // const data = {
    //   prompt: `${this.prompt}${message}`,
    //   model: this.model,
    //   max_tokens: 50
    // };
    return this.http.post(this.apiUrl, data, { headers });
    // return new Promise<string>((resolve, reject) => {
    //   this.http.post<any>(this.apiUrl, data, { headers: headers })
    //     .subscribe(
    //       response => {
    //         resolve(response.choices[0].text.trim());
    //       }

    //     );
    // });
  }
}
