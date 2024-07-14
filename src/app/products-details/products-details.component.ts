import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import{ProDetailsService} from './pro-details.service';
import{Productdetails} from './model/productdetails';
import { Title, Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-products-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products-details.component.html',
  styleUrls: ['./products-details.component.scss']
})
export class ProductsDetailsComponent implements OnInit{
  productId: string;
  productDetails:Productdetails;
  fallbackImage = 'assets/image.png';
  constructor(private route: ActivatedRoute,private proDetailsService:ProDetailsService,
    private titleService: Title,
    private metaService: Meta,
    
  ) {}
  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.productId = params['id']; // Get 'id' parameter from route
        console.log('Product ID:', this.productId);
        if(this.productId){
          this.proDetailsService.getProductDetails(this.productId).subscribe((res)=>{
            console.log(res,'********************');
            this.productDetails=res;
            this.titleService.setTitle(this.productDetails.title);
            this.metaService.updateTag({ name: 'description', content: this.productDetails.description });
            this.metaService.updateTag({ property: 'og:image', content: this.productDetails.image });
          },error=>{
            console.log(error);
            
          })
        }
      
      });
  }
  onLoad(){

  }

}
