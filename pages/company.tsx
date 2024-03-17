/* eslint-disable @next/next/no-img-element */
import { NextPage } from 'next';
import Head from 'next/head';
import { Layout } from '../components/common/Layout';
import ContactComponent from '../components/ContactComponent';
import { MainContainer } from '../components/shared';

const people = [
  {
    name: 'Lionel Gikonyo',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.krek.ke/_next/image?url=%2FlandImages%2F1%2F17641.jpg&w=1920&q=75',
  },
  {
    name: 'Cyrus Kangethe',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.krek.ke/_next/image?url=%2FlandImages%2F1%2F17641.jpg&w=1920&q=75',
  },
  {
    name: 'Someone Someone',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.krek.ke/_next/image?url=%2FlandImages%2F1%2F17641.jpg&w=1920&q=75',
  },
  {
    name: 'Someone Someone',
    role: 'Co-Founder / CEO',
    imageUrl:
      'https://www.krek.ke/_next/image?url=%2FlandImages%2F1%2F17641.jpg&w=1920&q=75',
  },
];

const Company: NextPage = () => {
  return (
    <Layout>
      <MainContainer>
        <Head>
          <title className="sans"> About Us | Kube Real Estate</title>
          <meta
            name="description"
            content="Get to know the company and meet the team behind Kube Real Estate"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-2">
            <div className="max-w-2xl flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Company
              </h2>
            </div>
            <div>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Kube real estate is a company registered under the Kenyan law.
                Founded in 2019 and incorporated in 2021. We pride ourselves
                with integrity and time driven deliveries our services. Kube is
                a property brokerage company that is driven by innovation and
                continuous testing of new real estate technology. This is
                because we make it our business to ensure that decision making
                is easier for our clients. We are also experts of land surveying
                and conveyancing.
              </p>
            </div>
          </div>
        </div>
        <div className="bg-white py-24 sm:py-32 mt-8">
          <div className="mx-auto grid max-w-7xl gap-y-20 gap-x-8 px-6 lg:px-8 xl:grid-cols-3">
            <div className="max-w-2xl flex items-center">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Meet our team
              </h2>
            </div>
            <ul
              role="list"
              className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2"
            >
              {people.map((person) => (
                <li key={person.name}>
                  <div className="flex items-center gap-x-6">
                    <img
                      className="h-16 w-16 rounded-full"
                      src="https://www.krek.ke/_next/image?url=%2FlandImages%2F1%2F17641.jpg&w=1920&q=75"
                      alt=""
                      height={10}
                      width={10}
                    />
                    <div>
                      <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">
                        {person.name}
                      </h3>
                      <p className="text-sm font-semibold leading-6 text-indigo-600">
                        {person.role}
                      </p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <ContactComponent />
      </MainContainer>
    </Layout>
  );
};

export default Company;
