import React from 'react';

const resizeHandler = () => {


    const container = document.getElementsByClassName('gameBoardContainer')[0];

    const side = Math.min(container.offsetHeight, container.offsetWidth);

    
    var component = document.getElementsByClassName('gameBoardComponent')[0];

    component.style.width = side + 'px';
    component.style.height = side + 'px';
};

class GameBoard extends React.Component {

    componentDidMount () {

        // initial resize
        resizeHandler();
        // and attach resizeHandler
        window.addEventListener('resize', resizeHandler);
    }

    render() {
        return (
            <div 
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                className='gameBoardContainer'
            >
                <div
                    style={{
                        display: 'flex'
                    }}
                    className='gameBoardComponent'
                >
                    <div style={{width: '99%', height: '99%', margin: 'auto',
                        border: '1px solid white'}}></div>
                </div>
                
            </div>
        );
    }
}

export {GameBoard};
