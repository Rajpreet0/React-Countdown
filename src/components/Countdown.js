/*
* 
* Importing Files 
*  
*   I. CSS File for Countdown.js
*  II. Importing React Hooks [useEffect & useState]
*/

import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import './Countdown.css'

function Countdown() {

  /**
   * The useState() method is an React Hook
   *  -> It allows you to have state variables in a functional components
   * 
   */  

  /*
  * Defining the useState -> [Days, Hours, Minutes, Seconds]
  * The default Value of the useStates which is an Integer will be 0
  */
   const [days, setDays]     = useState(0);
   const [hours, setHours]   = useState(0);
   const [minutes, setMinutes] = useState(0);
   const [seconds, setSeconds] = useState(0);

 
   /**
    * 
    * Function for the Countdown 
    * 
    */

   const countdown = () => {

       /**
        * The Date Function is an Object which represents 
        * a one time.
        * 
        * Contains a Number that represents milliseconds
        */

       
       /**
        *  Set an EndDate using the Date Function -> the Date Function contains a "dateObject" -> new Date(dateObject)
        * 
        *  Example: new Date (montIndex, day, year, hours, minutes, seconds) 
        */
       const endDate = new Date("August 16, 2022 11:25:00").getTime()

       /**
        *  The getTime() method returns the current Date
        */
       const today   = new Date().getTime()

       /**
        *  Defining a difference between the endDate / today ->  subtract and get the value
        *  Get the Actual Time between the endDate and today
        */
       const timeDiff = endDate - today

       /**
        * Giving the useStates an Integer Value => Unit is Milliseconds 
        *  "*" Multiply  
        */
       const seconds = 1000
       const minutes = seconds * 60
       const hours   = minutes * 60
       const days    = hours * 24

       /**
        * 
        * The Math Floor Function (Math.floor()) returns the largest integer [round off]
        * 
        * "/" - Dividing
        * "%" - Modulo -> Gives the remained number of the divison 
        * 
        */

       /**
        * Reason of Math.floor
        * 
        * If we dividing the timeDiff / days then a decimal value will be returned
        * 
        * And we cannot show a Decimal Number in the UI
        */

       let timeDays    = Math.floor(timeDiff / days)
       let timeHours   = Math.floor((timeDiff % days)  / hours) 
       let timeMinutes = Math.floor((timeDiff % hours) / minutes)
       let timeSeconds = Math.floor((timeDiff % minutes) / seconds) 
 
       /**
        * If the Number less than 10 then show a zero before the number 
        *  
        *  if (timeHours < 10 ) {
        *     "0" + timeHours
        *  } else {
        *     timeHours
        *  }
        * 
        */

       timeHours = timeHours < 10 ? "0" + timeHours : 
       timeHours
       timeMinutes = timeMinutes < 10 ? "0" + timeMinutes 
       : timeMinutes
       timeSeconds = timeSeconds < 10 ? "0" + timeSeconds 
       : timeSeconds

       /**
        * 
        * We are getting for e.x timeDays and setting it into setDays
        * --> Showing to the UI
        */
       setDays(timeDays)
       setHours(timeHours)
       setMinutes(timeMinutes)
       setSeconds(timeSeconds)
   }

   /**
    * The useEffect() method is an React Hook 
    *  -> It tells React that your component  needs to do something after render
    * 
    */

   /**
    * Calling the Countdown Function inside an useEffect Hook
    */

   useEffect(() => {
       /* 
       -> setInterval() method calls a function at a specified interval
       -> setInterval(function, milliseconds); 
       */
       setInterval(countdown, 1000)
   })

   /**
    * HTML Section 
    */

  return (
      <div className='countdown_main'>

  {/* Main Section which will be shown in the Center of the Screen */}
        <section className='container'>

     {/* The Headline of the Main Section (h1) -> the biggest one */}
            <h1>Dubai Vacation ✈️</h1>

        {/* The Countdown HTML Section under the Headline */}
            <div className='countdown'>

            {/* The Article Element is a independent self-contained content. Like a Newspaper */}
                <article>
                 {/* Inside the Article there will be a p tag (text: paragraph) and an h3 Tag (text: headline in size 3)*/}
                 {/* In p we are defining the useState Value and showing it to the UI*/}
                    <p>{days}</p>
                    <h3>Days</h3>
                </article>
                <article>
                    <p>{hours}</p>
                    <h3>Hours</h3>
                </article>
                <article>
                    <p>{minutes}</p>
                    <h3>Minutes</h3>
                </article>
                <article>
                    <p>{seconds}</p>
                    <h3>Seconds</h3>
                </article>
            </div>
        </section>
      </div>
  )
}

export default Countdown
