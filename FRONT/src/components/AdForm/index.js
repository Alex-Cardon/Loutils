import React from 'react';

import AdFormInput from './adFormInput';
import AdFormText from './adFormText';


import Proptypes from 'prop-types';

import './style.scss';

const AdForm = ({
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

    return (
        <div className="adForm">

            <h2 className="adForm__title">Decrivez ici votre outil</h2>

            <form>
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
                        placeholder="url photo"
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
                        placeholder="exemple: perceuse sans fil 12V 850w "
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
                            checked
                        />
                    </div>
                    <div>
                        <label hmtlfor="used">En etat de marche</label>
                        <input
                            type="radio"
                            id="used"
                            name="toolState"
                            value="used"
                            onChange={getToolStateValue}
                        />
                    </div>

                </div>
                <button
                    className="adForm__button"
                    type="submit"
                >
                    Validez
        </button>
            </form>

        </div>
    )

};

AdForm.proptypes = {
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
