import View from './View.js'
import icons from 'url:../../img/icons.svg'


class ResultsView extends View{
    _parentElement = document.querySelector('.results') // selecting the place where I want the results to be displayed

    _generateMarkup(){ // logging to console the results of input
        console.log(this._data);
        return this._data.map(this._generateMarkupPreview).join('')
    }

    _generateMarkupPreview(result){ // returning the html which will be displayed
        return `
        <li class="preview">
        <a class="preview__link preview__link--active" href="${result.id}">
          <figure class="preview__fig">
            <img src="${result.image}" alt="Test" />
          </figure>
          <div class="preview__data">
            <h4 class="preview__title">${result.title}</h4>
            <p class="preview__publisher">${result.publisher}</p>
            <div class="preview__user-generated">
              <svg>
                <use href="${icons}#icon-user"></use>
              </svg>
            </div>
          </div>
        </a>
      </li>`;
    }
}

export default new ResultsView();