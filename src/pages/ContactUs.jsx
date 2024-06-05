import React, { useState } from 'react';
import * as Yup from 'yup';
import styled from 'styled-components';
import Navbar from '../components/Navbar';

const ContactContainer = styled.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  margin-top: 10px;
  background-color: ${({ theme }) => (theme === 'light' ? '#fff' : '#333')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};
`;

const ContactForm = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  padding: 20px;
  border-radius: 8px;
  background-color: ${({ theme }) => (theme === 'light' ? '#f9f9f9' : '#444')};
  color: ${({ theme }) => (theme === 'light' ? '#000' : '#fff')};

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  margin-bottom: 8px;
`;

const Input = styled.input`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ImagePreview = styled.img`
  width: 100px;
  height: 100px;
  margin-top: 10px;
  object-fit: cover;
`;

const Button = styled.button`
  grid-column: span 2;
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    grid-column: span 1;
  }
`;

const ErrorText = styled.p`
  color: red;
  margin-top: 5px;
  margin-bottom: 0;
`;

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  color: #000;
  padding: 20px;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  position: relative;
`;

const CloseButton = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  font-size: 24px;
  cursor: pointer;
`;

const ContactUs = ({ theme }) => {
  const [formData, setFormData] = useState(null);
  const [previewImages, setPreviewImages] = useState({
    profileImage: null,
    bannerImage: null,
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [errors, setErrors] = useState({});

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email address').required('Email is required'),
    address: Yup.string().required('Address is required'),
    dob: Yup.date().required('Date of Birth is required'),
    bio: Yup.string().required('Bio is required'),
    profileImage: Yup.mixed().required('Profile Image is required'),
    bannerImage: Yup.mixed().required('Banner Image is required'),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const values = {
      name: formData.get('name'),
      email: formData.get('email'),
      address: formData.get('address'),
      dob: formData.get('dob'),
      bio: formData.get('bio'),
      profileImage: previewImages.profileImage,
      bannerImage: previewImages.bannerImage,
    };

    try {
      await validationSchema.validate(values, { abortEarly: false });
      setFormData(values);
      setIsModalOpen(true);
      setErrors({});
    } catch (error) {
      const validationErrors = {};
      error.inner.forEach((err) => {
        validationErrors[err.path] = err.message;
      });
      setErrors(validationErrors);
    }
  };

  const handleImageChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setPreviewImages((prev) => ({
          ...prev,
          [name]: event.target.result,
        }));
      };
      reader.readAsDataURL(files[0]);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Navbar theme={theme} />
      <ContactContainer theme={theme}>
        <h1>Contact Us</h1>
        <ContactForm onSubmit={handleSubmit} theme={theme}>
          <FormGroup>
            <Label htmlFor="name">Name:</Label>
            <Input id="name" name="name" type="text" />
            {errors.name && <ErrorText>{errors.name}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="email">Email:</Label>
            <Input id="email" name="email" type="email" />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="address">Address:</Label>
            <Input id="address" name="address" type="text" />
            {errors.address && <ErrorText>{errors.address}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="dob">Date of Birth:</Label>
            <Input id="dob" name="dob" type="date" />
            {errors.dob && <ErrorText>{errors.dob}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bio">Bio:</Label>
            <TextArea id="bio" name="bio" />
            {errors.bio && <ErrorText>{errors.bio}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="profileImage">Profile Image:</Label>
            <Input id="profileImage" name="profileImage" type="file" accept="image/*" onChange={handleImageChange} />
            {previewImages.profileImage && <ImagePreview src={previewImages.profileImage} alt="Profile Preview" />}
            {errors.profileImage && <ErrorText>{errors.profileImage}</ErrorText>}
          </FormGroup>
          <FormGroup>
            <Label htmlFor="bannerImage">Banner Image:</Label>
            <Input id="bannerImage" name="bannerImage" type="file" accept="image/*" onChange={handleImageChange} />
            {previewImages.bannerImage && <ImagePreview src={previewImages.bannerImage} alt="Banner Preview" />}
            {errors.bannerImage && <ErrorText>{errors.bannerImage}</ErrorText>}
          </FormGroup>
          <Button type="submit">Submit</Button>
        </ContactForm>
        {isModalOpen && (
          <Modal onClick={closeModal}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={closeModal}>&times;</CloseButton>
              <h2>Entered Data:</h2>
              <p>Name: {formData.name}</p>
              <p>Email: {formData.email}</p>
              <p>Address: {formData.address}</p>
              <p>Date of Birth: {formData.dob}</p>
              <p>Bio: {formData.bio}</p>
              {formData.profileImage && (
                <div>
                  <h3>Profile Image:</h3>
                  <ImagePreview src={formData.profileImage} alt="Profile" />
                </div>
              )}
              {formData.bannerImage && (
                <div>
                  <h3>Banner Image:</h3>
                  <ImagePreview src={formData.bannerImage} alt="Banner" />
                </div>
              )}
            </ModalContent>
          </Modal>
        )}
      </ContactContainer>
    </>
  );
};

export default ContactUs;
