function goToTicketSection(){
    const goTo = document.getElementById("ticket_CreateSection");
    const goToTicketSection = goTo.scrollIntoView({behavior:"smooth"})
}


const allSeats = document.getElementsByClassName("seat");

let seatPrice = 0;
let count = 0;


let getLeftSeat = document.getElementById("left-seat").innerText;
let updateLeftSeat = parseInt(getLeftSeat);

for (const seat of allSeats){
    seat.addEventListener('click', function(){
        // seat.classList.add("bg-green-400");
        // seat.classList.add("text-white");
        toggleSelection()
        console.log(seat)
        count = count + 1;
        updateLeftSeat = updateLeftSeat-1;


        seatPrice = seatPrice + 550;
        document.getElementById("add-cart").innerText = count;
        document.getElementById("total-price").innerText = seatPrice;
        document.getElementById("left-seat").innerText = updateLeftSeat;


        getElementTextById("a1");
        getElementTextById("a2");
        getElementTextById("a3");
        getElementTextById("a4");

        


        if(count===1){
            hideElementById('tr2');
            hideElementById('tr3')
            hideElementById("tr4")
        }
        else if(count===2){
            showElementById("tr2")
            hideElementById("tr3")
            hideElementById("tr4");
        }

        else if(count===3){
            showElementById("tr3")
            hideElementById("tr4")
        }

        else if(count===4){
            showElementById("tr4");
        }else{
            
        }


        // function deSelectButton(){
        //     seat.classList.remove("bg-green-400");
        //     seat.classList.remove("text-white")
        // }

        function toggleSelection() {
            let isSelected = false
            isSelected = !isSelected; // Toggle the isSelected variable
            if (isSelected) {
                seat.classList.add('bg-green-400');
            } else {
                seat.classList.remove('bg-green-400');
            }
        }
        

        
        

        if(count>4 && seatPrice>2200){
            seat.classList.remove("bg-green-400");
            seat.classList.remove("text-white")
            document.getElementById("add-cart").innerText = 4;
            document.getElementById("total-price").innerText = 2200;
            document.getElementById("left-seat").innerText = 40-4;
        }else{
            console.log("site is deselected")
        }
        
    })


}

// Coupon Apply code
document.getElementById("cupon-apply").addEventListener("click", applyCoupon)


function applyCoupon(){
    let inputData = document.getElementById("cupon-input").value;
    console.log(inputData);
    if(inputData==="new15"){
        let ticketPrice = document.getElementById("total-price").innerText;
        let covertTicketPrice = parseInt(ticketPrice);

        let discount = (covertTicketPrice*0.15);
        console.log(discount);
        let payablePrice = covertTicketPrice-discount;

        let discountSet = document.getElementById("disCount");
        discountSet.innerText = discount;

        let percentText =  document.getElementById("percent");
        percentText.innerText = 15;

        let payable = document.getElementById("finalPrice");
        payable.innerText = payablePrice;

        hideElementById("cupon-section");
        showElementById("discount-section")
    }
    else if(inputData==="couple20"){
        let ticketPrice = document.getElementById("total-price").innerText;
        let covertTicketPrice = parseInt(ticketPrice);

        let discount = (covertTicketPrice*0.20);
        console.log(discount);
        let payablePrice = covertTicketPrice-discount;

        let discountSet = document.getElementById("disCount");
        discountSet.innerText = discount;

        let percentText20 =  document.getElementById("percent");
        percentText20.innerText = 20;

        let payable = document.getElementById("finalPrice");
        payable.innerText = payablePrice;





        hideElementById("cupon-section");
        showElementById("discount-section")
    }
    else{
        const clearField = document.getElementById("cupon-input").value;
        clearField.innerText= "Invalid Cupon";
        
    }
}






// input field validation 

const phone = document.getElementById("PhoneNumber");
const Fname = document.getElementById("Name");

phone.addEventListener("input", checkInputField);
Fname.addEventListener("input", checkInputField);

function checkInputField(){
    if(Fname.value.length > 0 && phone.value.length>0){
        nextBtn.removeAttribute('disabled');
    }else{
        nextBtn.setAttribute('disabled', 'disabled');
    }

}


// next button click 

function confirmSeat(){
    hideElementById("header-id")
    hideElementById("main-id")
    showElementById("success-alert")
}



// // Get reference to the button
// const toggleButton = document.getElementById('toggleButton');

// // Variable to keep track of button state
// let isSelected = false;

// // Add event listener to the button
// toggleButton.addEventListener('click', toggleSelection);

// // Function to toggle selection state
// function toggleSelection() {
//     isSelected = !isSelected; // Toggle the isSelected variable
//     if (isSelected) {
//         toggleButton.classList.add('selected');
//     } else {
//         toggleButton.classList.remove('selected');
//     }
// }











