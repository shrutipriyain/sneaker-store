import React from 'react';
import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component';


class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'Sketchers',
                    imageUrl: 'https://i.ytimg.com/vi/rVJ4CCCKt9w/maxresdefault.jpg',
                    id: 1
                },
                {
                    title: 'Yeezy',
                    imageUrl: 'https://www.kicksonfire.com/wp-content/uploads/2022/02/adidas-yeezy-boost-350-v2-pure-oat-4.jpeg',
                    id: 2
                }, {
                    title: 'Nike',
                    imageUrl: 'https://c.files.bbci.co.uk/44CF/production/_117751671_satan-shoes1.jpg',
                    id: 3
                }, {
                    title: 'Adidas',
                    imageUrl: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/run-adidas-running-shoes-1645131039.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
                    id: 4
                }, {
                    title: 'Reebok',
                    imageUrl: 'https://images.complex.com/complex/images/c_crop,h_3015,w_5360,x_0,y_220/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/vqwlmzm7rk0uac4b6u8q/white-gum-reebok-classic-leather?fimg-ssr-default',
                    id: 5
                }
            ]
        }

    }


    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(section => (<MenuItem title={section.title} key={section.id} imageUrl={section.imageUrl}></MenuItem>))
                }

            </div>
        )
    }
}


export default Directory;