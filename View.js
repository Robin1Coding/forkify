// here in this file is all the code that is needed for all Views

import icons from 'url:../../img/icons.svg'

export default class View {
    _data;
    render(data){
        this._data = data;
        const markup = this._generateMarkup()
        this._clear();
        this._parentElement.insertAdjacentHTML('afterbegin', markup)
    }

    _clear() { // this method will be avaible for all views that have parentElement like this one
        this._parentElement.innerHTML = '';
        
    }

    // rendering this spinner
    renderSpinner = function(){
        const markup =`
        <div class="spinner">
            <svg>
              <use href="${icons}#icon-loader"></use>
            </svg>
        </div> 
        `;
        this._clear(); // clearing
        this._parentElement.insertAdjacentHTML('afterbegin', markup); // always remember to insert this html
      };

    renderError(message = this._errorMessage){ //this._errorMessage is default in this case
      const markup =`
      <div class="error">
            <div>
              <svg>
                <use href="${icons}#icon-alert-triangle"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`

          this._clear(); // clearing
          this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

    renderMessage(message = this._message){ // other message than error
      const markup =`
      <div class="message">
            <div>
              <svg>
                <use href="${icons}#icon-smile"></use>
              </svg>
            </div>
            <p>${message}</p>
          </div>`

          this._clear(); // clearing
          this._parentElement.insertAdjacentHTML('afterbegin', markup);
    }

}