// button
import Button from './Button';

const Hero = () => {
  return (
    <main className='hero'>
      <div className='hero__presentation'></div>

      <div className='hero__content'>
        <div className='hero__content-line'></div>
        <h1 className='hero__content-title dm-serif-display w400 center white'>
          Humanizing your insurance.
        </h1>

        <p className='hero__content-text karla w400 center white'>
          Get your life insurance coverage easier and
          faster. We blend our expertise and
          technology to help you find the plan that’s
          right for you. Ensure you and your loved
          ones are protected.
        </p>

        <div className='hero__content-btn-container'>
          <Button
            text='VIEW PLANS'
            type='plans'
            theme='light' />
        </div>
      </div>
      
      <div className='hero__pattern-left'></div>
      <div className='hero__pattern-right'></div>
    </main>
  );
};

export default Hero;