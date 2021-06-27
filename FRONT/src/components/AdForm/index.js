import React from 'react';
import Header from 'src/components/Header';
import LoginForm from 'src/containers/LoginForm';
import Footer from 'src/components/Footer';
import AdFormInput from './adFormInput';
import AdFormText from './adFormText';
//import adFormPicture from './adFormPicture';

import Proptypes from 'prop-types';
import './style.scss';

const AdForm = ({
  //uploadHandler,
 // onImageSelected,
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
        {/* <adFormPicture /> */}
        {/* <div>
          <input
            type="file"
            accept='.jpg, .png, .jpeg'
            onChange={handleImageSelected}
            className="uploadInput"
            
          />
          <button onClick={uploadHandler}>Upload!</button>
        </div> */}
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

  )
};

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
  //uploadHandler: Proptypes.func.isRequired,
  //onImageSelected: Proptypes.func.isRequired,
  handleLogin: Proptypes.func.isRequired,
  getToolStateValue: Proptypes.func.isRequired,
  changeField: Proptypes.func.isRequired,
  toolName: Proptypes.string.isRequired,
  image: Proptypes.string.isRequired,
  price: Proptypes.string.isRequired,
  caution: Proptypes.string.isRequired,
  description: Proptypes.string.isRequired,
  toolState: Proptypes.string.isRequired,
}
export default AdForm;
