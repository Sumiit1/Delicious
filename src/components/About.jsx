import aboutImage from "../assets/images/about-image.png";

export const About = () => {

    return (
        <div className="bg-white relative" id="about">
            <div className="p-24 grid grid-cols-2">
                <div className="">
                    <h2 className="text-2xl font-medium">About Us</h2>
                    <p className="text-lg max-w-fit w-1/2">
                     With Delicious,you can say goodbye to long wait times
                     and complicated order processes.Our customer-friendly
                     platform lets you easily browse through menus,customize
                     your orders.We are here to make your food ordering
                     experience seamless,convenient and delightful.
                     Best Food in town to bring
                     you a diverse range of culinary delights, ensuring there's
                     something to satisfy every palate.
                    </p>
                </div>
                <div className="flex items-center justify-center">
                    <img src={aboutImage} alt="" className="w-[400px] h-[400px] object-cover" />
                </div>
            </div>
        </div>
    )
}