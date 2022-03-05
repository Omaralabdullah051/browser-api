console.log('I am here');

// alert('he is coming');
const coming = () => {
    alert('he is coming');
}

const askPicnic = () => {
    const response = confirm('Are you going to picnic?');
    console.log(response);
    if (response === true) {
        alert('amake free tey bkash kore dey');
    }
    else {
        console.log('DGM!!! dure giya mor');
    }
}

const askName = () => {
    const name = prompt('What is your name?');
    if (name) {
        console.log(name);
    }
}