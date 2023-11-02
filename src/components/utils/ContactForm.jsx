import { Box } from '@mui/material';
import { useState } from 'react';


function ContactForm() {
    const [email, setEmail] = useState('');
    const [isError, setIsError] = useState(false)
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        /* setEmail('');
        setIsError(false);
        setErrorMessage(''); */

        if (email.length && email.includes('@')) {
            setErrorMessage('Please insert a valid email');
            setIsError(true);
        } else {
            setErrorMessage('');
            setIsError(false);
        }
    }

  return (
    <Box>
        <form 
        onSubmit={handleSubmit}
        style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                gap: '1.5rem',
            }}
        >    <div>
                <input 
                value={email}
                onChange={(e) => setEmail(e.target.value) }
                type="email" 
                name='email'
                autoComplete='off'
                placeholder="Update your inbox"
                style={{
                    background: "hsl(0, 0%, 98%)",
                    height: "2.25rem",
                    borderRadius: "1rem",
                    minWidth: "190px",
                    color: "hsl(227, 12%, 61%)",
                }}
                />
                {
                    isError && (
                        <p style={{color: "red", display: "block"}}> {errorMessage} </p>
                    )
                }
            </div>      
            <button
            style={{
                padding: "0.5rem 1.5rem",
                borderRadius: "30px",
                background: "hsl(12, 88%, 59%)",
                color: "hsl(0, 0%, 98%)",
                fontFamily: "'Be Vietnam Pro', sans-serif",
                textTransform: "uppercase",
            }}
            >
                Go
            </button>
        </form>
    </Box>
  )
}

export default ContactForm;