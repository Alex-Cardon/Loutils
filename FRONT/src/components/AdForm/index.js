import React, { useRef } from 'react';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import AdFormInput from './adFormInput';
import AdFormText from './adFormText';
import Diary from 'src/containers/diary';

import { Icon } from 'semantic-ui-react';

import Proptypes from 'prop-types';

import './style.scss';
//import { uploadFile } from '../../actions/adForm';

const AdForm = ({

  uploadHandler,
  onImageSelected,


    onUploadFile,

    handleLogin,
    getToolStateValue,
    changeField,

    toolName,
    image,
    price,
    caution,
    description,
    toolState,


}) => {

    // onUploadFile = () => {
    //   console.log('hdello');
    // }

    const onButtonClick = () => {
        // `current` points to the mounted file input element
        inputFile.current.click();
    };

    const inputFile = useRef(null);

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
    };

    return (
        <div className="adForm" >

            <h2 className="adForm__title">Déposer une annonce</h2>

            <div className="adForm__component">

                <form onSubmit={handleSubmit} className="adForm__form">
                    <h3>Décrivez ici votre outil</h3>

                    <div className="adForm__unit">
                        <p>Quel est le titre de l annonce??</p>
                        <AdFormInput
                            name="toolName"
                            type="text"
                            //placeholder="exemple: Perceuse"
                            //onChange prend deux valeurs: event et name;
                            onChange={changeField}
                            value={toolName}
                        />
                    </div>
                    <div className="adForm__unit">
                        <p>Catégorie</p>
                        <AdFormInput
                            name="image"
                            type="text"
                            //placeholder="Categories"
                            onChange={changeField}
                            value={image}
                        />
                    </div>
                    <div className="adForm__unit">
                        <p>Quel est son prix de location</p>
                        <AdFormInput
                            name="price"
                            type="text"
                            //placeholder="exemple: 50 "
                            onChange={changeField}
                            value={price}
                        />
                    </div>
                    <div className="adForm__unit">
                        <p>Le montant de la caution exigée</p>
                        <AdFormInput
                            name="caution"
                            type="text"
                            //placeholder="exemple: 50"
                            onChange={changeField}
                            value={caution}
                        />
                    </div>

                    <div className="adForm__unit">
                        <p>Décrivez ici votre outil</p>
                        <AdFormText
                            name="description"
                            type="text"
                            //placeholder="description "
                            onChange={changeField}
                            value={description}
                        />
                    </div>

                    <div className="adForm__unit--radio">
                        <p>Loutil est plutot: {toolState} </p>
                        <div>
                            <label hmtlfor="new">comme neuf</label>
                            <input
                                type="radio"
                                id="new"
                                name="toolState"
                                value="new"
                                // ici, avec getToolStateValue, je veux récupérer la valuer value="new"
                                onChange={getToolStateValue}

                            />
                        </div>
                        <div>
                            <label hmtlfor="used">En etat de marche</label>
                            <input
                                type="radio"
                                id="used"
                                name="toolState"
                                value="working"
                                onChange={getToolStateValue}

                            />
                        </div>

                    </div>
                    <div>
                        <p>Ajoutez des photos</p>

                        <input
                            type="file"
                            accept="image/png, image/jpeg"
                            ref={inputFile}
                            onChange={onUploadFile}
                        />
                        <button onChange={onButtonClick}>Open file upload</button>
                    </div>
                    <button
                        className="adForm__button"
                        type="submit"
                    >
                        Validez
                    </button>
                </form>
                <div className="adForm__diary">
                    <h3>Choisissez la période de disponibilité de votre outil</h3>
                    <Diary />
                </div>
            </div>


  handleLogin,
  getToolStateValue,
  changeField,

  toolName,
  image,
  price,
  caution,
  description,
  toolState,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
  };

  const handleImageSelected = (event) => {
    const file = event.target.files[0];
    console.log(file);

    
    onImageSelected(file);
 };

  return (
    <div className="adForm" >
      <Header />
      <LoginForm />
      <h2 className="adForm__title">Decrivez ici votre outil</h2>

      <form onSubmit={handleSubmit}>
        <div className="adForm__unit">
          <AdFormInput
            name="toolName"
            type="text"
            placeholder="exemple: Perceuse"
            //onChange prend deux valeurs: event et name;
            onChange={changeField}
            value={toolName}
          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="image"
            type="text"
            placeholder="Categories"
            onChange={changeField}
            value={image}
          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="price"
            type="text"
            placeholder="exemple: 50 "
            onChange={changeField}
            value={price}
          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="caution"
            type="text"
            placeholder="exemple: 50"
            onChange={changeField}
            value={caution}
          />
        </div>

        <div className="adForm__unit">
          <AdFormText
            name="description"
            type="text"
            placeholder="description "
            onChange={changeField}
            value={description}
          />
        </div>

        <div className="adForm__unit--radio">
          <p>Loutil est plutot: {toolState} </p>
          <div>
            <label hmtlfor="new">comme neuf</label>
            <input
              type="radio"
              id="new"
              name="toolState"
              value="new"
              // ici, avec getToolStateValue, je veux récupérer la valuer value="new"
              onChange={getToolStateValue}

            />
          </div>
          <div>
            <label hmtlfor="used">En etat de marche</label>
            <input
              type="radio"
              id="used"
              name="toolState"
              value="working"
              // onChage nous retourne un tableau files 
              onChange={getToolStateValue}

            />
          </div>

        </div>


        <div>
            <input 
              
              type="file"
              accept='.jpg, .png, .jpeg'
              onChange={handleImageSelected}
            />
            <button onClick={uploadHandler}>Upload!</button>



        </div>
          
        <button
          className="adForm__button"
          type="submit"
        >
          Validez
        </button>
      </form>
      <Footer />
    </div>
  )

};

AdForm.proptypes = {

  uploadHandler: Proptypes.func.isRequired,
  onImageSelected: Proptypes.func.isRequired,


    onUploadFile: Proptypes.func.isRequired,
    handleLogin: Proptypes.func.isRequired,
    getToolStateValue: Proptypes.func.isRequired,
    changeField: Proptypes.func.isRequired,
    toolName: Proptypes.string.isRequired,
    image: Proptypes.string.isRequired,
    price: Proptypes.string.isRequired,
    caution: Proptypes.string.isRequired,
    description: Proptypes.string.isRequired,
    toolState: Proptypes.string.isRequired,
    // isNew: Proptypes.string.isRequired,
    // working: Proptypes.string.isRequired,


  handleLogin: Proptypes.func.isRequired,
  getToolStateValue: Proptypes.func.isRequired,
  changeField: Proptypes.func.isRequired,
  toolName: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
  caution: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  toolState: Proptypes.string.isRequired,


  // isNew: Proptypes.string.isRequired,
  // working: Proptypes.string.isRequired,


}

export default AdForm;
