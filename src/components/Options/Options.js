import React from 'react';

const Options = ({ options }) => {
    return (
        <div>
            {
                options.map(option => {
                    return (
                        <div>
                            {option}
                        </div>

                    )
                })
            }

        </div>
    );
};

export default Options;