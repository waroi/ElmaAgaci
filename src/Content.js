import React from 'react';
import {connect} from 'react-redux';
import apples from "./apples";
import Apple from "./Apple";
import _ from 'lodash';
import $ from "jquery";
import {setBasket} from "./data/actions/locations";

class Content extends React.Component {


    state = {
        basket: []
    };

    constructor(props) {
        super(props);
        this.applesDown = this.applesDown.bind(this);
    }

    componentDidMount() {

        //   $('.content').css('background','red');

    }

    applesDown() {
        // burada random süre ayarlamamız gerekir, çünkü her bir nesne ayrı zamanda inecek.
        const toplam = apples.length;
        const {basket} = this.props;

        //   let times = [];

        for (let i = 0; i < toplam; i++) {
            let time = ((Math.random() * toplam) / 2) * 1000;
            // times.push(time);

            let apple = $('.apple:eq(' + i + ')');

            // animasyonla, top: 100% yapıyoruzki, nesne en alta insin.
            apple.animate({
                top: '100%'
            }, time, () => {
                // animasyon tamamlanınca
                console.log(`${i}.elma düştü!`);
                setTimeout(() => {
                    apple.remove();
                    basket.push(i);
                    // burada yeni değişken oluşturup, böyle eklememizin nedeni, State'ler bazen değişmeleri anlamayabiliyor.
                    // Burada her veri eklendikçe, props'tan sepet verilerini geri çekerek, öyle güncelliyoruz.
                    // Burada onun değiştini anlatıyoruz.
                    let nw = [...basket];
                    setBasket(nw);

                    //  console.log(this.state.basket);
                }, 1000);
            });

        }
        //  console.log('times',times);


    }


    shakeTree() {
        //    this.setState({contentClass: 'content animated shake'});

        // jquery seçicilerimizle content sınıfımızı seçiyoruz.
        const content = $('.content');
        // animate.css kütüphanemizin sınıflarından shake'i, content'e sınıf olarak veriyoruz.
        content.addClass('animated shake speed infinite');

        // 3000 ms = 3s, setTimeout; belirtilen süreden sonra işlem yapan fonksiyondur. Eklediğimiz sınıfları 3 saniye sonra geri alıyoruz.
        setTimeout(() => {
            content.removeClass('animated shake infinite');
            this.applesDown();
        }, 3000);
    }


    render() {
        return (
            <div>
                <div className="headButton">
                    <button onClick={this.shakeTree.bind(this)}>Elmaları Topla!</button>
                </div>
                <div className={'content'}>
                    <div className="apples">
                        {_.map(apples, (n, index) => <Apple key={index} style={n}/>)}
                    </div>
                    <img style={{width: 512, height: 512}} src={require('./images/tree.svg')} alt={"Tree"}/>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => ({
    basket: state.basket.basket
});

Content = connect(mapStateToProps)(Content);

export default Content;