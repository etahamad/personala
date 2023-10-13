      <MetaHead
        title={'Subscribe to newsletter | Omar Hamad'}
        description={
          'Subscribe to my newsletter for frequent updates on my engineering journey. I share about my learnings, projects, and life.'
        }
        embedSource={{
          twitter:
            'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/subscribe%20to%20newsletter%20cover_omarhamad.png?updatedAt=1691257541383&tr=w-1200%2Ch-675%2Cfo-auto',
          linkedin:
            'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/subscribe%20to%20newsletter%20cover_omarhamad.png?updatedAt=1691257541383&tr=w-1200%2Ch-628%2Cfo-auto',
          og: 'https://ik.imagekit.io/eawrckp8wfi/portfolio-image-source/seo/subscribe%20to%20newsletter%20cover_omarhamad.png?updatedAt=1691257541383',
        }}
      />
      <div className="subscribe-to-newsletter-view-container font-sans">
        <ViewContainer
          className={'my-16 flex flex-row items-stretch justify-center'}>
          <div className="hero-section-wrapper max-xl:items-start max-xl:flex max-xl:flex-col">
            {/* start: small screens collage wrapper */}
            <div className="images-wrapper-mobile hidden max-xl:flex max-xl:flex-row max-xl:items-center max-xl:justify-start max-xl:gap-3 max-xl:mb-12">
              <div className={cn(imageWrapperClass)}>
                <Image
                  src={'/media/yash-lift.png'}
                  alt="yash-elevator"
                  width={'400'}
                  height={'400'}
                />
              </div>
              <div className={cn(imageWrapperClass)}>
                <Image
                  src={'/media/club.png'}
                  alt="hard-rock-cafe"
                  width={'400'}
                  height={'400'}
                  className="h-full"
                />
              </div>
              <div className={cn(imageWrapperClass)}>
                <Image
                  src={'/media/yash.jpg'}
                  alt="god-taking-selfie"
                  width={'400'}
                  height={'400'}
                />
              </div>
              <div className={cn(imageWrapperClass)}>
                <Image
                  src={'/media/flight.png'}
                  alt="god-in-flight"
                  width={'400'}
                  height={'400'}
                />
              </div>
              <div className={cn(imageWrapperClass)}>
                <Image
                  src={'/media/cafe-laptop.png'}
                  alt="god-using-laptop-drinking-coffee"
                  width={'400'}
                  height={'400'}
                />
              </div>
            </div>
            {/* end: small screens collage wrapper */}
            <h1 className="w-[540px] text-7xl tracking-tighter font-semibold max-xl:w-[420px] max-xl:text-6xl max-md:text-5xl max-md:w-full max-md:text-center max-md:mx-auto">
              {'Sharing my engineering journey and experiences 🌱'}
            </h1>
            <div className="description-content-container mt-12 max-md:w-fit max-md:mx-auto">
              <h3 className="leading-snug text-lg text-[#696969] tracking-tighter font-semibold max-md:text-center">
                {'Join my newsletter'}
              </h3>
              <p className="text-base mt-2 tracking-tighter font-medium text-[#898989] leading-6 w-[24ch] max-md:text-center">
                {
                  'I share about frontend concepts, UI components, Tailwind, projects, and more ✨'
                }
              </p>
            </div>
            <Button
              className={'mt-12 max-md:mx-auto'}
              onClick={() =>
                window.open('https://omarhamad.substack.com/embed')
              }>
              {'Subscribe to my newsletter'}
            </Button>
                'absolute -rotate-6 left-48 top-56',
              )}>
              <Image
                src={'/media/yash-lift.png'}
                alt="yash-elevator"
                width={'400'}
                height={'400'}
              />
            </div>
            <div className={cn(imageWrapperClass, 'absolute rotate-6 left-48')}>
              <Image
                src={'/media/club.png'}
                alt="hard-rock-cafe"
                width={'400'}
                height={'400'}
                className="h-full"
              />
            </div>
            <div className={cn(imageWrapperClass, 'absolute -rotate-6')}>
              <Image
                src={'/media/yash.jpg'}
                alt="god-taking-selfie"
                width={'400'}
                height={'400'}
              />
            </div>
            <div
              className={cn(
                imageWrapperClass,
                'absolute rotate-6 top-40 left-12',
              )}>
              <Image
                src={'/media/flight.png'}
                alt="god-in-flight"
                width={'400'}
                height={'400'}
              />
            </div>
            <div className={cn(imageWrapperClass, 'absolute -rotate-6 top-72')}>
              <Image
                src={'/media/cafe-laptop.png'}
                alt="god-using-laptop-drinking-coffee"
                width={'400'}
                height={'400'}
              />
            </div>
          </div>
        </ViewContainer>
      </div>
    </>
  );
};

export default SubscribeToNewsletterView;
