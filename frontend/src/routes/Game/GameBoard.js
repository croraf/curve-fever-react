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
                    flexGrow: 1,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                className='gameBoardContainer'
            >
                <div
                    style={{
                        display: 'flex',
                        backgroundColor: 'black'
                    }}
                    className='gameBoardComponent'
                >
                    <div style={{
                        width: 'calc(100% - 10px)', height: 'calc(100% - 10px)',
                        margin: 'auto',
                        border: '1px solid white'}}>
                    </div>
                </div>
                
            </div>
        );
    }
}

export {GameBoard};
