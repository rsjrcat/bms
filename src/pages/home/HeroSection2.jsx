import React from 'react';
import { CheckCircle } from 'lucide-react';
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png';
import AvatarGroup from '../../components/AvatarGroup';

const HeroSection2 = () => {
    return (
        <section className="">
            <div className="container  max-w-7xl  mx-auto px-4 py-12 md:py-24">
                <div className="mt-8 flex flex-col lg:flex-row items-center gap-12">
                    {/* Left Content */}
                    <div className="w-full lg:w-5/12">
                        <div className="flex flex-col gap-8">
                            {/* Top Badge */}
                            <div className="flex items-center gap-2">
                                <span>🚀</span>
                                <span className="text-primary font-semibold">
                                    Empower Your Learning Journey Today
                                </span>
                            </div>

                            {/* Main Content */}
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold m-0">Unlock Your Potential</h1>
                                    <p className="text-gray-600 text-3xl md:text-4xl lg:text-5xl font-bold">with Expert-Led Courses</p>
                                    <p className="m-0">Hands-on training, and certifications to help you get the most from Geeks Learning.</p>
                                </div>

                                {/* Features List */}
                                <ul className="list-none m-0 p-0 flex flex-col gap-2">
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        <span>Expert Instructors</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        <span>Flexible Learning</span>
                                    </li>
                                    <li className="flex items-center gap-2">
                                        <CheckCircle size={16} className="text-green-500" />
                                        <span>Supportive Community</span>
                                    </li>
                                </ul>
                            </div>

                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2">
                                <a href="#!" className="px-6 py-3 bg-primary text-white bg-yellow-500 font-medium rounded text-center">Join For Free</a>
                                <a href="#!" className="px-6 py-3 border border-gray-300 text-gray-700 font-medium rounded text-center">Explore Courses</a>
                            </div>
                        </div>
                    </div>

                    {/* Right Content - Images and Stats */}
                    <div className="w-full lg:w-6/12 lg:ml-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* First Image Column */}
                            <div className="hidden md:flex flex-col justify-start items-center">
                                <div className="relative -mr-28">
                                    <div className="absolute bottom-1/4 left-0 -ml-8 flex flex-col items-start">
                                        {/* Badge: 50+ Courses */}
                                        <div className="bg-white rounded-full py-2 px-3 shadow mb-2 inline-flex items-center">
                                            <svg width="24" height="24" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M23.9688 3.0378H8.29689C7.3189 3.0378 6.38097 3.4263 5.68942 4.11784C4.99788 4.80939 4.60938 5.74732 4.60938 6.72531V26.0848C4.60938 26.3293 4.7065 26.5638 4.87939 26.7366C5.05227 26.9095 5.28676 27.0066 5.53125 27.0066H22.1251C22.3696 27.0066 22.6041 26.9095 22.7769 26.7366C22.9498 26.5638 23.047 26.3293 23.047 26.0848C23.047 25.8403 22.9498 25.6058 22.7769 25.4329C22.6041 25.26 22.3696 25.1629 22.1251 25.1629H6.45313C6.45313 24.6739 6.64739 24.2049 6.99316 23.8592C7.33893 23.5134 7.8079 23.3191 8.29689 23.3191H23.9688C24.2133 23.3191 24.4478 23.222 24.6207 23.0491C24.7936 22.8762 24.8907 22.6418 24.8907 22.3973V3.95967C24.8907 3.71518 24.7936 3.48069 24.6207 3.30781C24.4478 3.13492 24.2133 3.0378 23.9688 3.0378ZM13.8282 4.88155H19.3594V13.1785L17.1458 11.5191C16.9862 11.3994 16.7921 11.3347 16.5927 11.3347C16.3932 11.3347 16.1991 11.3994 16.0395 11.5191L13.8282 13.1785V4.88155ZM23.047 21.4754H8.29689C7.64944 21.4745 7.0133 21.6451 6.45313 21.9697V6.72531C6.45313 6.23632 6.64739 5.76735 6.99316 5.42158C7.33893 5.07581 7.8079 4.88155 8.29689 4.88155H11.9844V15.0222C11.9844 15.1934 12.0321 15.3612 12.1221 15.5069C12.2121 15.6525 12.3409 15.7702 12.494 15.8468C12.6471 15.9233 12.8186 15.9558 12.9891 15.9404C13.1596 15.925 13.3225 15.8624 13.4594 15.7597L16.5938 13.4089L19.7293 15.7597C19.8886 15.8792 20.0822 15.9439 20.2813 15.9441C20.5258 15.9441 20.7603 15.847 20.9332 15.6741C21.1061 15.5012 21.2032 15.2667 21.2032 15.0222V4.88155H23.047V21.4754Z"
                                                    fill="#F59E0B"
                                                />
                                            </svg>
                                            <span className="text-gray-800 font-semibold ml-2">50+ Courses</span>
                                        </div>

                                        {/* Badge: Certified Courses */}
                                        <div className="bg-white rounded-full py-2 px-3 shadow mb-2 inline-flex items-center">
                                            <svg width="24" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M28.5782 15.2724C28.5792 14.2137 28.3197 13.171 27.8226 12.2363C27.3255 11.3016 26.606 10.5035 25.7277 9.91249C24.8493 9.32146 23.839 8.95561 22.7859 8.8472C21.7328 8.73879 20.6691 8.89115 19.6888 9.29084C18.7084 9.69054 17.8415 10.3253 17.1644 11.1391C16.4873 11.953 16.0208 12.9209 15.8061 13.9576C15.5913 14.9943 15.635 16.0679 15.9331 17.0837C16.2313 18.0996 16.7748 19.0265 17.5157 19.7827V26.3349C17.5156 26.4922 17.5557 26.6468 17.6322 26.7842C17.7087 26.9215 17.819 27.037 17.9528 27.1197C18.0865 27.2024 18.2391 27.2495 18.3962 27.2566C18.5532 27.2636 18.7095 27.2304 18.8501 27.16L22.1251 25.5214L25.4001 27.16C25.5407 27.2304 25.6969 27.2636 25.854 27.2566C26.011 27.2495 26.1637 27.2024 26.2974 27.1197C26.4311 27.037 26.5415 26.9215 26.618 26.7842C26.6945 26.6468 26.7346 26.4922 26.7345 26.3349V19.7827C27.9169 18.5793 28.579 16.9595 28.5782 15.2724ZM22.1251 10.663C23.0367 10.663 23.9279 10.9333 24.6859 11.4398C25.4439 11.9463 26.0347 12.6662 26.3836 13.5085C26.7325 14.3507 26.8238 15.2775 26.6459 16.1716C26.4681 17.0658 26.0291 17.8871 25.3844 18.5317C24.7398 19.1764 23.9185 19.6154 23.0243 19.7932C22.1302 19.9711 21.2034 19.8798 20.3611 19.5309C19.5189 19.182 18.799 18.5913 18.2925 17.8332C17.786 17.0752 17.5157 16.1841 17.5157 15.2724C17.5157 14.0499 18.0013 12.8775 18.8657 12.0131C19.7302 11.1486 20.9026 10.663 22.1251 10.663ZM22.5376 23.6661C22.4095 23.602 22.2683 23.5686 22.1251 23.5686C21.9819 23.5686 21.8406 23.602 21.7125 23.6661L19.3594 24.8438V21.1021C20.2236 21.5126 21.1684 21.7255 22.1251 21.7255C23.0818 21.7255 24.0265 21.5126 24.8907 21.1021V24.8438L22.5376 23.6661ZM15.6719 22.6474C15.6719 22.8919 15.5748 23.1264 15.4019 23.2993C15.229 23.4722 14.9945 23.5693 14.7501 23.5693H4.60938C4.12039 23.5693 3.65142 23.3751 3.30565 23.0293C2.95988 22.6835 2.76563 22.2145 2.76562 21.7256V6.97549C2.76562 6.48649 2.95988 6.01752 3.30565 5.67175C3.65142 5.32598 4.12039 5.13173 4.60938 5.13173H24.8907C25.3797 5.13173 25.8487 5.32598 26.1945 5.67175C26.5402 6.01752 26.7345 6.48649 26.7345 6.97549C26.7345 7.21998 26.6374 7.45447 26.4645 7.62735C26.2916 7.80024 26.0571 7.89737 25.8126 7.89737C25.5681 7.89737 25.3336 7.80024 25.1607 7.62735C24.9878 7.45447 24.8907 7.21998 24.8907 6.97549H4.60938V21.7256H14.7501C14.9945 21.7256 15.229 21.8227 15.4019 21.9956C15.5748 22.1684 15.6719 22.4029 15.6719 22.6474ZM13.8282 16.1943C13.8282 16.4388 13.731 16.6733 13.5582 16.8461C13.3853 17.019 13.1508 17.1162 12.9063 17.1162H8.2969C8.0524 17.1162 7.81792 17.019 7.64503 16.8461C7.47215 16.6733 7.37502 16.4388 7.37502 16.1943C7.37502 15.9498 7.47215 15.7153 7.64503 15.5424C7.81792 15.3695 8.0524 15.2724 8.2969 15.2724H12.9063C13.1508 15.2724 13.3853 15.3695 13.5582 15.5424C13.731 15.7153 13.8282 15.9498 13.8282 16.1943ZM13.8282 12.5068C13.8282 12.7513 13.731 12.9857 13.5582 13.1586C13.3853 13.3315 13.1508 13.4286 12.9063 13.4286H8.2969C8.0524 13.4286 7.81792 13.3315 7.64503 13.1586C7.47215 12.9857 7.37502 12.7513 7.37502 12.5068C7.37502 12.2623 7.47215 12.0278 7.64503 11.8549C7.81792 11.682 8.0524 11.5849 8.2969 11.5849H12.9063C13.1508 11.5849 13.3853 11.682 13.5582 11.8549C13.731 12.0278 13.8282 12.2623 13.8282 12.5068Z"
                                                    fill="#139A74"
                                                />
                                            </svg>
                                            <span className="text-gray-800 font-semibold ml-2">Certified Courses</span>
                                        </div>

                                        {/* Badge: Online Project */}
                                        <div className="bg-white rounded-full py-2 px-3 shadow inline-flex items-center">
                                            <svg width="24" height="25" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M18.9492 12.9114L13.4179 9.22386C13.2791 9.13121 13.1176 9.078 12.9509 9.06992C12.7842 9.06185 12.6184 9.0992 12.4712 9.17799C12.324 9.25678 12.201 9.37406 12.1153 9.5173C12.0295 9.66055 11.9843 9.82438 11.9844 9.99132V17.3664C11.9843 17.5333 12.0295 17.6971 12.1153 17.8404C12.201 17.9836 12.324 18.1009 12.4712 18.1797C12.6184 18.2585 12.7842 18.2958 12.9509 18.2878C13.1176 18.2797 13.2791 18.2265 13.4179 18.1338L18.9492 14.4463C19.0757 14.3622 19.1794 14.2481 19.2511 14.1142C19.3228 13.9803 19.3603 13.8307 19.3603 13.6788C19.3603 13.5269 19.3228 13.3774 19.2511 13.2435C19.1794 13.1096 19.0757 12.9955 18.9492 12.9114ZM13.8282 15.6436V11.7198L16.7759 13.6788L13.8282 15.6436ZM24.8907 5.38193H4.60938C4.12039 5.38193 3.65142 5.57618 3.30565 5.92195C2.95988 6.26772 2.76563 6.73669 2.76562 7.22569V20.132C2.76563 20.621 2.95988 21.09 3.30565 21.4357C3.65142 21.7815 4.12039 21.9757 4.60938 21.9757H24.8907C25.3797 21.9757 25.8487 21.7815 26.1945 21.4357C26.5402 21.09 26.7345 20.621 26.7345 20.132V7.22569C26.7345 6.73669 26.5402 6.26772 26.1945 5.92195C25.8487 5.57618 25.3797 5.38193 24.8907 5.38193ZM24.8907 20.132H4.60938V7.22569H24.8907V20.132ZM26.7345 24.7414C26.7345 24.9859 26.6374 25.2204 26.4645 25.3933C26.2916 25.5661 26.0571 25.6633 25.8126 25.6633H3.6875C3.44301 25.6633 3.20852 25.5661 3.03564 25.3933C2.86275 25.2204 2.76563 24.9859 2.76562 24.7414C2.76562 24.4969 2.86275 24.2624 3.03564 24.0895C3.20852 23.9166 3.44301 23.8195 3.6875 23.8195H25.8126C26.0571 23.8195 26.2916 23.9166 26.4645 24.0895C26.6374 24.2624 26.7345 24.4969 26.7345 24.7414Z"
                                                    fill="#E53E3E"
                                                />
                                            </svg>
                                            <span className="text-gray-800 font-semibold ml-2">Online Project</span>
                                        </div>
                                    </div>

                                    {/* Green Background Shape */}
                                    <svg width="205" height="189" viewBox="0 0 205 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M0.0391235 179.983C0.0391235 80.8399 80.4107 0.468323 179.554 0.468323H189.034C197.318 0.468323 204.033 7.18386 204.033 15.4679V166.407C204.033 178.626 194.127 188.532 181.908 188.532H8.58745C3.86634 188.532 0.0391235 184.704 0.0391235 179.983Z"
                                            fill="#139A74"
                                        />
                                    </svg>
                                </div>
                            </div>

                            {/* Yellow Background Image */}
                            <div className="md:mt-8">
                                <div className="bg-yellow-400 flex justify-center rounded-xl relative" style={{ paddingBottom: "120px", paddingTop: "100px" }}>
                                    <img
                                        src={img1}
                                        alt="College student holding laptop"
                                        className="absolute bottom-0 -mr-8 "
                                    />
                                </div>
                            </div>

                            {/* Blue Background Image */}
                            <div className="hidden md:flex flex-col justify-end">
                                <div className="bg-blue-600 flex justify-center rounded-xl relative mx-5" style={{ paddingBottom: "150px", paddingTop: "100px" }}>
                                    <img
                                        src={img2}
                                        alt="Young man going to university"
                                        className="absolute bottom-0"
                                    />
                                </div>
                            </div>

                            {/* Stats Card */}
                            <div className="hidden md:block">
                                <div className="relative mt-5">
                                    {/* Orange Background Shape */}
                                    <svg width="204" height="189" viewBox="0 0 204 189" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M203.994 9.01663C203.994 108.16 123.622 188.532 24.4789 188.532H14.9995C6.71548 188.532 -3.05176e-05 181.816 -3.05176e-05 173.532V22.5934C-3.05176e-05 10.374 9.90572 0.468292 22.1251 0.468292H195.446C200.167 0.468292 203.994 4.29552 203.994 9.01663Z"
                                            fill="#EF8E70"
                                        />
                                    </svg>

                                    {/* Stats Card */}
                                    <div className="bg-white rounded-xl p-3 absolute bottom-10 left-10 mb-3 shadow">
                                        {/* <div className="flex -space-x-2 mb-2">
                                            {["R", "S", "A", "P"].map((initial, index) => (
                                                <div
                                                    key={index}
                                                    className="w-8 h-8 rounded-full flex items-center justify-center text-white text-sm font-semibold border border-white"
                                                    style={{
                                                        backgroundColor: ['#F97316', '#3B82F6', '#10B981', '#EF4444'][index], // custom colors for each
                                                    }}
                                                >
                                                    {initial}
                                                </div>
                                            ))}
                                        </div> */}
                                        <AvatarGroup />
                                        <div className="text-gray-800 font-bold text-xl">7,324+</div>
                                        <div className="text-gray-500">Students Preparing with us</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSection2;