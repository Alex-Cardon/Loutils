import React from "react";
//import { NavLink } from 'react-router-dom';

import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';
import AdFormInput from './adFormInput';
import AdFormPicture from './adFormPicture';
import AdFormText from './adFormText';

import Proptypes from 'prop-types';
import './style.scss';

const AdForm = ({
  getToolStateValue,
  handleSubmit
}) => (

    <div className="adForm" >
      <Header />
      <LoginForm />
      <h2 className="adForm__title">Decrivez ici votre outil</h2>
      <div>
      <AdFormPicture
          />
          </div>
      <h2>Publier une annonce</h2>
      <form onSubmit={handleSubmit}>
        <div className="adForm__unit">
          <AdFormInput
            name="toolName"
            type="text"
            placeholder="exemple: Perceuse"
            
          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="image"
            type="text"
            placeholder="Categories"

          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="price"
            type="text"
            placeholder="exemple: 50 "

          />
        </div>
        <div className="adForm__unit">
          <AdFormInput
            name="caution"
            type="text"
            placeholder="exemple: 50"

          />
        </div>
        <div className="adForm__unit">
          <AdFormText
            name="description"
            type="text"
            placeholder="description "

          />
        </div>
        <div className="adForm__unit--radio">
          <p>Loutil est plutot: {getToolStateValue} </p>
          <div>
            <label hmtlfor="new">comme neuf</label>
            <input
              type="radio"
              id="new"
              name="toolState"

            />
          </div>
          <div>
            <label hmtlfor="used">En etat de marche</label>
            <input
              type="radio"
              id="used"
              name="toolState"

            />
          </div>
        </div>
        <button
          className="adForm__button"
          type="submit"
        >
          Validez
        </button>
        {/*<div className="adForm__diary">
                    <h3>Choisissez la période de disponibilité de votre outil</h3>
                    <Diary />
  </div>*/}
      </form>
      <Footer />
    </div>
);

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


AdForm.proptypes = {
  getToolStateValue: Proptypes.string.isRequired,
  handleSubmit: Proptypes.func.isRequired,
}
export default AdForm;
