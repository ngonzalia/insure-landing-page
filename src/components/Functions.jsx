// components
import Card from './Functions-card';
import Button from './Button';

const Functions = () => {
  return (
    <section className='functions'>
      <div className='functions__line'></div>

      <h2 className='functions__title dm-serif-display w400 center dark-blue'>
        We’re different
      </h2>

      <div className='functions__cards'>
        <Card
          img='snappy-process'
          title='Snappy Process'
          text='Our application process can be completed in
                minutes, not hours. Don’t get stuck filling
                in tedious forms.' />
        <Card
          img='affordable-prices'
          title='Affordable Prices'
          text='We don’t want you worrying about high
                monthly costs. Our prices may be low, but we
                still offer the best coverage possible.' />
        <Card
          img='people-first'
          title='People First'
          text='Our plans aren’t full of conditions and
                clauses to prevent payouts. We make sure
                you’re covered when you need it.' />
      </div>

      <div className='functions__how-we-work'>
        <h4 className='functions__how-we-work-title dm-serif-display w400 center white'>
          Find out more about how we work
        </h4>

        <Button
          text='HOW WE WORK'
          type='how-we-work'
          theme='light' />
      </div>
    </section>
  );
};

export default Functions;