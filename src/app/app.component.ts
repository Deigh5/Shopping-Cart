import { Component} from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  
  title = 'Shopping';
  emptyCart = true
  carts = []
  summary = []
  totAmount:any = 0

  accessories =[{pic:"bags.jpg",desc:"Bag",quantity:1, price:300},
                {pic:"belt.jpg",desc:"Belt",quantity:1,price:150},
                {pic:"bracelet.jpg",desc:"Bracelet",quantity:1,price:75},
                {pic:"Earring studs.jpg",desc:"Earrings",quantity:1,price:50},
                {pic:"necklace.jpg",desc:"Necklace",quantity:1,price:120},
                {pic:"shades.jpg",desc:"Shades",quantity:1,price:200}]
  
    newPic
    newDesc
    newQuantity
    newPrice

    AddCart(accessory)
    {
      this.carts.push(accessory)
       this.totalCartAmount(accessory.price)
       this.emptyCart = false
      
    }
    
    deleteFromCart(item)
    {
      let index = this.carts.indexOf(item)
      this.carts.splice(index,1)
      if(this.accessories.length <= 0)
      {
        this.emptyCart = true
      }
      this.totalCartSub(item.price)
    }

    totalCartAmount(newPrice)
    {
       this.totAmount+= newPrice
    }
  
    totalCartSub(newPrice)
    {
      this.totAmount-=newPrice
    }
    

    /*Summary(SumBuys)
    {

    }*/
  
}
