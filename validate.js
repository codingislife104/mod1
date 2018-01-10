/*Javascript for validation of Consumer electricity form.*/

function validate()
        
        {
    
              var win              =     window.open();
              var unit             =     frm1.txtunit.value;
              var ConsumerName     =     frm1.consumername.value;
              var ConsumerNumber   =     frm1.consumernumber.value;
              var Email            =     frm1.email.value;
        
              var TotalCharge      =     getTotalCharge(unit);
         
              alert("\n Consumer No       :      "+ ConsumerNumber   +
                    "\n Consumer Name     :      "+ ConsumerName     +
                    "\n Consumer Email    :      "+ Email            +
                    "\n # of Units        :      "+ unit             +
                    "\n Charge/Unit       :      "+ TotalCharge )
    
         }


function getTotalCharge(unit)

         {
        
               if ( unit >= 0 && unit <= 100 )
               {
                var charge  = 2.80;
               }
            
               else if ( unit >= 101 && unit <= 200 )
               {
                var charge  = 3.90;
               }
            
               else
               {
               var charge = 4.50;
               }
        
               return charge;


         }