import React, { useRef, useState } from "react";
import "./contact2.css";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { TiLocation } from "react-icons/ti";
import { MdPhone, MdEmail } from "react-icons/md";
import emailjs from "emailjs-com";

const Contact2 = () => {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#000080",
      },
    },
  });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: false,
    email: false,
    phone: false,
    message: false,
  });

  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }

    emailjs
      .sendForm(
        "service_s560ysa",
        "template_izvhzse",
        form.current,
        "OYfA6nGjUP7MzG--T"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          alert("Message sent successfully!");
          form.current.reset();
          setFormData({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
        },
        (error) => {
          console.log("FAILED...", error.text);
          alert("An error occurred. Please try again later.");
        }
      );
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });

    validateField(name, value);
  };

  const validateField = (fieldName, value) => {
    switch (fieldName) {
      case "name":
        setFormErrors({
          ...formErrors,
          name: value.length === 0,
        });
        break;
      case "email":
        setFormErrors({
          ...formErrors,
          email: !validateEmail(value),
        });
        break;
      case "phone":
        setFormErrors({
          ...formErrors,
          phone: !validatePhone(value),
        });
        break;
      case "message":
        setFormErrors({
          ...formErrors,
          message: value.length === 0,
        });
        break;
      default:
        break;
    }
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePhone = (phone) => {
    const regex = /^[0-9]{10}$/;
    return regex.test(phone);
  };

  const validateForm = () => {
    let valid = true;
    Object.values(formErrors).forEach((error) => {
      if (error) {
        valid = false;
      }
    });
    return valid;
  };

  return (
    <ThemeProvider theme={theme}>
      <Container className="form">
        <Grid
          container
          spacing={0}
          justifyContent="center"
          className="grid-container"
        >
          <Grid item xs={12} md={6} className="grid1" id="form">
            <Box
              component="form"
              className="box"
              ref={form}
              onSubmit={handleSubmit}
            >
              <Typography
                variant="h4"
                component="h1"
                gutterBottom
                className="text-black"
                style={{ fontWeight: 900 }}
              >
                Contact Us
              </Typography>
              <TextField
                label="Name"
                InputLabelProps={{
                  style: { fontWeight: "900" },
                }}
                variant="outlined"
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={formErrors.name}
                helperText={formErrors.name ? "Name is required" : ""}
                required
              />
              <TextField
                label="Email"
                InputLabelProps={{
                  style: { fontWeight: "900" },
                }}
                variant="outlined"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={formErrors.email}
                helperText={formErrors.email ? "Invalid email format" : ""}
                required
              />
              <TextField
                label="Phone"
                variant="outlined"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                error={formErrors.phone}
                helperText={
                  formErrors.phone ? "Phone number must be 10 digits" : ""
                }
                InputLabelProps={{
                  style: { fontWeight: "900" },
                }}
                required
              />
              <TextField
                label="Message"
                InputLabelProps={{
                  style: { fontWeight: "900" },
                }}
                variant="outlined"
                multiline
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={formErrors.message}
                helperText={formErrors.message ? "Message is required" : ""}
                required
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                className="sendButton"
              >
                Send
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} md={4} className="grid">
            <Box className="contactInfo">
              <Typography variant="h4" component="h1" gutterBottom>
                Contact Information
              </Typography>
              <Box className="innerInfo">
                <Typography variant="body1">
                  The Inter-College Tournament Management System streamlines
                  organizing and managing college sports events. Users can
                  search for leagues, view fixtures, and contact organizers
                  easily. It enhances participant engagement with up-to-date
                  schedules and results, fostering competitive and collaborative
                  spirit among colleges. The user-friendly interface ensures
                  efficient communication and coordination, promoting
                  sportsmanship and teamwork across academic institutions.{" "}
                </Typography>
                <Typography variant="body1">
                  <TiLocation
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  Kolkata, West Bengal
                </Typography>
                <Typography variant="body1">
                  <MdPhone
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  (+91) 94889 78889
                </Typography>
                <Typography variant="body1">
                  <MdEmail
                    style={{ verticalAlign: "middle", marginRight: "8px" }}
                  />
                  ictms@contact.com
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default Contact2;
