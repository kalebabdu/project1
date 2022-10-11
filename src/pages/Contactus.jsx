import React from 'react'
import styled from 'styled-components'

function Contactus() {
  return (
    <Page className='section' id='ContactUs'>
        <Des>
            <div>
                <h1>Contact us</h1>
                <p>
                    Need to get in touch with us? Either fill out the form <br></br> with 
                    your inquiry or find the department email you'd<br></br> like to contact below.
                    <br></br> <br></br><br></br> <br></br>Website developed by Kaleb A.<br></br> <br></br> <a href='https://www.linkedin.com/in/kaleb-abdu-fantaw-4711371a8'><i class="fa fa-linkedin-square" style={{fontSize:'40px'}}></i></a>
                    <a href='https://www.instagram.com/kalebabdu/'><i class="fa fa-instagram" style={{fontSize:'40px'}}></i></a>
                </p>
            </div>
        </Des>
        <Form>
            <form>
                <label for='firstname' >FirstName</label>
                <input type='text' id='firstname'></input>

                <label for='lastName'>Lastname</label>
                <input type='text' id='lastname'></input>   

                <label for='email'>Email</label>
                <input type='email' id='email'></input>

                <label for='comment'>What can we help you with</label>
                <textarea id="comment" >
                </textarea>

            </form>
        </Form>
    </Page>
  )
}

const Page = styled.div`
    height: 100vh;
    width: 100%;
    display:grid;
    grid-template-columns: 1fr 1fr;
    scroll-snap-align: start;
`
const Des = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    h1{
        color: white;
        font-size: 40px;
        letter-spacing: 1px;
    }
    p{
        color: white;
        letter-spacing: 1px;
    }
`
const Form = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color:white;

    form{
        border: 1px white solid;
        padding: 50px;
        border-radius: 30px;
    }

    label{
        margin: auto;
    }
    input{
        margin: 10px;
        background-color: #ebeef1;
        border: 0;
        padding: 10px;
        width: 400px;
        border-radius: 5px;
        display: block;
        
    }
    textarea{
        display: block;
        margin: 10px;
        padding: 10px;
        width: 400px;
        height: 150px;
    }
`
export default Contactus