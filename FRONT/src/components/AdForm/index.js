import React, { useRef, /* useState */ } from 'react'; 

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';

import AdFormInput from './adFormInput';
import AdFormText from './adFormText';
import Diary from 'src/containers/diary';

import { Icon } from 'semantic-ui-react';

import Proptypes from 'prop-types';


/*

source : https://github.com/pqina/react-filepond <- laisser commenter, c'est pour info

import ReactDOM from 'react-dom'

// Import React FilePond
import { FilePond, registerPlugin } from "react-filepond";

// Import FilePond styles
import "filepond/dist/filepond.min.css";

// Import the Image EXIF Orientation and Image Preview plugins
// Note: These need to be installed separately
import FilePondPluginImageExifOrientation from "filepond-plugin-image-exif-orientation";
import FilePondPluginImagePreview from "filepond-plugin-image-preview";
import "filepond-plugin-image-preview/dist/filepond-plugin-image-preview.css";

// Register the plugins
registerPlugin(FilePondPluginImageExifOrientation, FilePondPluginImagePreview);
*/



import './style.scss';
//import { uploadFile } from '../../actions/adForm';

const AdForm = ({

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

    /*const files = [
      {
        source: "index.html",
        options: {
          type: "local"
        }
      }
    ]*/

    /*handleInit() {
      console.log("FilePond instance has initialised", this.pond);
    }*/
    

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

{/*  
                    <div className="App">
                      <FilePond
                        ref={ref => (this.pond = ref)}
                        files={this.state.files}
                        allowMultiple={true}
                        allowReorder={true}
                        maxFiles={1}
                        server="/api"
                        name="files" {/* sets the file input name, it's filepond by default *//*}
                        oninit={() => this.handleInit()}
                        onupdatefiles={fileItems => {
                          // Set currently active file objects to this.state
                          this.setState({
                            files: fileItems.map(fileItem => fileItem.file)
                          });
                        }}
                      />
                    </div>
*/}


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
  // isNew,
  // working,
}) => {

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleLogin();
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

        {/* <div className="adForm__unit--radio">
            <AdFormRadio
                name="radio"
                stateKey="isNew"
                type="radio"
                placeholder="comme neuf"
                checked
            />
            <AdFormRadio
                name="radio"
                stateKey="working"
                type="radio"
                placeholder="etat de marche"

            />
        </div> */}

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
          <button>
            <Icon name='camera' style={{ color: "red" }} />
          </button>


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
