import React, { Component } from 'react'
import PublicMenu from '../components/menus/publicMenu.js'
import Header from '../components/banners/header1.js'
import {Grid,Segment,Image} from "semantic-ui-react"

export default class SignUp extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  componentWillMount() {
  }

  render(){
    return(
      <div>
        <Header title="Inscription"/>
        <PublicMenu location={this.props.location}/>

        <Grid columns="equal" style={{padding:"2rem",paddingLeft:'10rem',paddingRight:'10rem'}}>
          <Grid.Row>
            <Grid.Column>
              <Segment loading color="red">
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column>
              <Segment loading color="red">
	 
 
 <h1>Coordonnées de livraison</h1>   


 
 <form>    


 
 <label>Nom et Prénom:</label>    


 
 <input type="text" id="nom"> <br> <br>    


 
 <label>Adresse 1 :</label>    


 
 <input type="text" id="Adresse"> <br> <br> 


 
 <label>Adresse 2 :</label>    


 
 <input type="text" id="Adresse"> <br> <br> 


 
 <label>Ville :</label>    


 
 <input type="text" id="Ville"> <br> <br> 


 
 <label>Code Postale :</label>    


 
 <input type="text" id="Code Postale"> <br> <br> 


 
 <label>Pays:</label>    


 
 <input type="text" id="Pays"> <br> <br> 


 
 <label>Numero de téléphone:</label>    


 
 <input type="text" id="Numero de téléphone"> <br> <br> 


 
</form> 


 
<h2>Paiement</h2>   


 
 <form>    


 
  <label>Type de carte de paiement</label> 


 
 <select name="Type de carte de paimenet">


 
  <option value="Selectionner votre type de carte">selectionner votre type de carte</option>


 
  <option value="Visa">Visa</option>


 
  <option value="MasterCard">MasterCard</option>


 
  <option value="American Express">AmericanExpress</option>


 
  <option value="PayPal">PayPal</option>


 
  </select> <br> <br> 


 
 <label>Numéro de la carte</label>    


 
 <input type="text" id="Numero de la carte"> <br> <br>    


 
 <label>Nom affiché dans la carte :</label>    


 
 <input type="text" id="nom"> <br> <br> 


 
 <label>Date d'expiration de la carte':</label>    


 
 <input type="Date" id="expiration"> <br> <br> 


 
 <label>Code de securité:</label>    


 
 <input type="text" id="Code"> <br> <br> 


 



 
 <input type="button" value="Valider" onclick="validation()"> <br> 


 
</form> 


 
<div id="errordiv">              


 
</div>            

  
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <Segment loading color="red">
                <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
	}
}
