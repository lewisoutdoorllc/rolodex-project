import { Component } from 'react';

class SearchBox extends Component {
    render() {
        const { onChangeHandler, placeholder, className } = this.props;
        return (
            <div className='search-box'>
                <input
                    className={className}
                    type='search'
                    placeholder={placeholder}
                    onChange={onChangeHandler}
                />
            </div>
        );
    }
}

export default SearchBox;