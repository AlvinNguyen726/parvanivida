import React from "react";

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="flex">
      <div className="form center bg-washed-red shadow-5">
        <form className="mt-10"
          onSubmit={this.submitForm}
          action="https://formspree.io/xjvgbggv"
          method="POST">
      
      <h1 className="fw1 display db dark-gray f2 tc">Book Appointment</h1>

      <div className="mt5 mh6">
        <label className="db fw6 mb1" for="name">Name</ label>
        <input className="b pa2 input-reset" 
        type="text" 
        className="form-control"
        name="Name"
        id="Name"
        placeholder="First Last"
        />   
      </div>
      <div className="mt4 mh6">
        <label className="db fw6 mb1" for="name">Email</ label>
        <input className="b pa2 input-reset " 
        type="text" 
        className="form-control"
        name="Email"
        id="Email"
        placeholder="email@email.com"
        />   
      </div>
      <div className="mt4 mh6">
        <label className="db fw6 mb1" for="name">Phone</ label>
        <input className="b pa2 input-reset " 
        type="tel" 
        className="form-control"
        name="Phone"
        id="Phone"
        placeholder="(###)###-####"
        />   
      </div>
      <div className="mt4 mh6 w-100">
        <label className="db fw6 mb1" for="name">Preferred Appointment Date</ label>
        <input className="b input-reset " 
        type="Date" 
        className="form-control"
        name="Date"
        id="Date"
        placeholder="mm/dd/yyyy"
        />   
      </div>
      <div className="mt4 mh6">
        <label className="db fw6 mb1" for="name">Message</ label>
        <input className="b pa2 input-reset" 
        type="text" 
        className="form-control"
        name="Message"
        id="Message"
        placeholder="Optional"
        />   
      </div>



        {status === "SUCCESS" ? <p className="db mt4 pv3 ph5 tracked ttu b bg-washed-red dark-gray sans-serif no-underline center">Thank you! Your Appointment request has been sent!</p> : <button type = "submit" className="db mt4 pv3 ph5 tracked ttu b bg-washed-red dark-gray sans-serif no-underline hover-gray pointer center ">Book Now</button>}
        {status === "ERROR" && <p>Ooops! There was an error.</p>}
      </form>
      </div>
      <div className="store-info center bg-washed-red shadow-5">

        <h1 className="fw1 display db dark-gray f3 tc">Store Hours</h1>
        <h2 className="mt4 db tc fw1 dark-gray f5">Monday: 10AM - 6PM</h2>
        <h2 className="db tc fw1 dark-gray f5">Tuesday: 10AM - 6PM</h2>
        <h2 className="db fw1 tc dark-gray f5">Wednesday: 10AM - 6PM</h2>
        <h2 className="db fw1 tc dark-gray f5">Thursday: 10AM - 6PM</h2>
        <h2 className="db fw1 tc dark-gray f5">Friday: 10AM - 6PM</h2>
        <h2 className="db fw1 tc dark-gray f5">Saturday: 10AM - 6PM</h2>
        <h2 className="db fw1 tc dark-gray f5">Sunday: CLOSED</h2>

        <h3 className="db fw1 pl3 dark-gray f6 i">Due to the delicate nature of our dresses in our store, unfortunately we cannot allow children in our salon.</h3>
        <h1 className="mt4 fw1 display db dark-gray f3 tc">Our Location</h1>
        <h2 className="mt3 tc justify-center db fw1 dark-gray f5">7107 South Texas 6 Houston, TX 77083</h2>
        <h2 className="db tc dark-gray f5">Tel: (281)498-9292</h2>
        <h2 className="db tc dark-gray f5">Email: Sales@ParvaniVida.com</h2>


      </div>
      </section>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}