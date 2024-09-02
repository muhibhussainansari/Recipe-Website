import React from 'react'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'

function About() {
  return (
    <>
      <Header />
      <div className='flex justify-items-start'>
      <div className="flex max-w-[1200px] flex-col items-center text-left rounded-md border md:flex-row mt-16  bg-slate-300 hover:-translate-y-3">
        <div className="h-full w-full md:h-[400px] md:w-[1700px]">
          <img
            src="https://tdk-web-media.s3-eu-west-2.amazonaws.com/about-header.jpg"
            alt="error"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4 ">
            <h1 className="inline-flex items-center text-3xl font-serif mb-10 font-extrabold">
              Teaching people how to cook their way to health
            </h1>
            <p className="mt-0 text-lg text-gray-600">
              The Dr’s. Kitchen began with Dr. Rupy Aujla, an NHS medical doctor whose life was changed when he suffered a significant heart condition. Since learning more about nutritional medicine and doing a deep dive into the literature he was able to reverse his condition using a food and lifestyle approach. In 2015 he started the Doctor’s Kitchen as a way of teaching everybody how they can cook their way to health and to showcase the beauty of food and medicinal effects of eating and living well.
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Food
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Health
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Eat
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>

      <div className='flex justify-end'>
      <div className="flex max-w-[1200px] flex-col text-left rounded-md border md:flex-row mt-20 mb-14 bg-blue-300 hover:-translate-y-3">
        <div className="h-full w-full md:h-[400px] md:w-[1700px]">
          <img
            src="https://tdk-web-media.s3-eu-west-2.amazonaws.com/about-text.jpg"
            alt="error"
            className="h-full w-full rounded-md object-cover"
          />
        </div>
        <div>
          <div className="p-4">
            <h1 className="inline-flex items-l text-3xl font-serif pt-16 pb-10 font-extrabold">
              Building an ecosystem
            </h1>
            <p className="mt-0 text-lg text-gray-600">
              After gaining popularity as an online blog, he started the Dr’s. Kitchen Podcast, and produced three best selling books. In the last few years, Dr. Rupy has made regular appearances on television shows across the BBC, ITV and more recently alongside Prue Leith in Channel 4’s ‘Cook Clever, Waste Less’.

              With a wealth of research and a huge catalogue of recipes built up over the years, it was time to take The Doctor’s Kitchen to the next level...
            </p>
            <div className="mt-4">
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Food
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Health
              </span>
              <span className="mb-2 mr-2 inline-block rounded-full bg-gray-100 px-3 py-1 text-[10px] font-semibold text-gray-900">
                #Eat
              </span>
            </div>
          </div>
        </div>
      </div>
      </div>
      {/* New Compontent  */}

      <div>
  <div class="mx-auto max-w-7xl px-4">
    <hr class="mt-5" />
    <div class="mt-16 flex items-center justify-center">
      <div class="space-y-6 md:w-3/4 text-center">
        <p class="text-3xl font-bold text-gray-900 md:text-4xl">
          Meet our team
        </p>
        <p class="max-w-4xl text-base text-gray-700 md:text-xl">
          Our philosophy is simple — hire a team of diverse, passionate people
          and foster a culture that empowers you to do your best work.
        </p>
        <div></div>
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
      <div class="rounded-md border">
        <img
          src="https://st4.depositphotos.com/1017986/25404/i/450/depositphotos_254046202-stock-photo-happy-male-indian-chef-in.jpg"
          alt="Gabrielle Fernandez"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Gabrielle Fernandez
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Head Chef
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://www.shutterstock.com/image-photo/smiling-young-beautiful-asian-woman-600nw-2337955697.jpg"
          alt="Victória Silva"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Victória Silva
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Vegetable Chef
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://media.istockphoto.com/id/1165683221/photo/chef-presents-something-on-a-black-background.jpg?s=612x612&w=0&k=20&c=G3_9EIg-nt-ZKh48hlvRMYWhizVU3uQuUcoNuhOVLKM="
          alt="Gabrielle Fernandez"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Gabrielle Fernandez
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Roast Chef
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://www.shutterstock.com/image-photo/chefcooker-chefs-hat-jacket-senior-600nw-2166278519.jpg"
          alt="Sadie Lewis"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Sadie Lewis
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Meat Chef
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
          alt="Thilde Olaisen"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Thilde Olaisen
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Head of Doctor
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/030/928/115/small_2x/handsome-indian-doctor-generate-ai-photo.jpg"
          alt="Deepika Ramesh"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Deepika Ramesh
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Food Tester
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://static.vecteezy.com/system/resources/thumbnails/028/287/555/small_2x/an-indian-young-female-doctor-isolated-on-green-ai-generated-photo.jpg"
          alt="Jordi Santiago"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Jordi Santiago
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
          Food Tester 
        </p>
      </div>
      <div class="rounded-md border">
        <img
          src="https://img.freepik.com/free-photo/young-confident-afro-american-cook-chef-uniform-crosses-arms-holds-ladle-isolated-white-background-with-copy-space_141793-34896.jpg"
          alt="Kerim Fahri"
          class="h-[300px] w-full rounded-lg object-cover "
        />
        <p class="mt-6 w-full px-2 text-xl  font-semibold text-gray-900">
          Kerim Fahri
        </p>
        <p class="w-full px-2 pb-6 text-sm font-semibold text-gray-500">
        Saucier
        </p>
      </div>
    </div>
  </div>
</div>

    <Footer/>
    </>

  )
}

export default About