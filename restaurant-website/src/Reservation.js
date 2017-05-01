import React from 'react'

const Reservation = () => {
  return (
    <div className="container">
      <div className="col-sm-8 text-left">
        <p>Book online or give us a call on 020 3375 1515 between 9.30am–6pm on weekdays, and between 12pm–5pm on weekends.</p>

          <p>Your feedback is important to us. Tell us what you think at feedback@fifteen.net.</p>

          <h3>LUNCH</h3>
          <p>Mon to Sun 12:00 to 15:00</p>
          
          <h3>DINNER</h3>
          <p>Mon to Thur 18:00 to 22:30</p>
          <p>Fri & Sat 17:30 to 22:30</p>
          <p>Sun 18:00 to 21:30</p>
          <p>If you would like to make any changes to your reservation please email us on reservations@fifteen.net</p>
      </div>
      <div className="col-sm-4">
        <form>
          <div class="form-group">
            <label>Reservation Date</label>
            <input type="date" class="form-control" />
          </div>
          <div class="form-group">
            <label>Reservation Time</label>
            <input type="time" class="form-control" />
          </div>
          <div class="form-group">
            <label for="people">People</label>
            <input type="time" class="form-control" id="people" />
          </div>
          
          <button type="submit" class="btn btn-default">Submit</button>
        </form>
      </div>
    </div>
  )

}

export default Reservation;