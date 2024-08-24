import {Button} from "@nextui-org/button";

import { DeleteMin, RightArrow, Search } from "@/components/elements/Icons";
import { Link } from "@nextui-org/react";

import {Input} from "@nextui-org/input";

export default function Home() {
  return (
    <>
    {/* Pertama*/}
    <div className="container-content flex ">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300 ">
          <li className="text-black">Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5 flex flex-col-reverse lg:flex-row justify-center">
          <div className=" w-full flex flex-col justify-center lg:w-1/3">
            <h1 className="text-3xl font-bold">Elevate Your Messaging Efficiency with Our Innovative Admin Tools</h1>
            <p className="text-xs mt-6 font-medium">Selamat datang di Fowardin! Pengelolaan pesan Anda menjadi lebih mudah dengan Admin Tools kami. Tingkatkan komunikasi Anda dan pelanggan dengan fitur pesan otomatis. Menyimpan kontak menjadi lebih praktis dengan fitur sinkronasi Google Concact. Dapatkan kendali penuh pesan dengan manajemen konten yang praktis.</p>
            <Button className="mt-6 w-full p-0 bg-black text-white w-3/5 rounded flex justify-center items-center ">
              <div className="w-10/12 flex justify-center">
              <p>Daftar Sekarang</p>
              </div>
              <div className="w-2/12 flex justify-center border-l-2 p-0">
              <RightArrow/>
              </div>
            </Button>
          </div>
          <div className="w-full lg:w-2/3 flex justify-center">
            <img src="./started-img.svg" alt="" className="w-full"/>
          </div>
        </div>
      </div>
    </div>

    {/* Kedua */}
    <div className="container-content flex items-center">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li className="text-black">Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5 flex flex-col lg:flex-row justify-center">
          <div className=" w-full lg:w-1/2 flex justify-center">
            <img src="./broadcast-img.svg" alt="" className="w-full"/>
          </div>

          <div className=" w-full flex flex-col justify-center lg:w-1/2">
            <h1 className="text-3xl font-bold">Reach Further with Ease</h1>
            <p className="text-xs mt-6 font-medium">Fowardin memberikan Anda akses cepat untuk memperluas jangkauan komunikasi Anda. Dengan fitur Broadcast kami, Anda dapat mengirim pesan kepada banyak kontak dan grup sekaligus. Menjangkau audiens Anda tidak pernah semudah ini.</p>
          </div>
         
        </div>
      </div>
    </div>

    {/* Ketiga*/}
    <div className="container-content bg-white flex items-center">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li className="text-black">Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5 flex flex-col-reverse lg:flex-row justify-center">
          <div className=" w-full flex flex-col justify-center lg:w-1/2">
            <h1 className="text-3xl font-bold">Right Time, Effective Messages</h1>
            <p className="text-xs mt-6 font-medium">Fowardin memungkinkan Anda untuk merencanakan pengiriman iklan yang tepat sasaran. Manfaatkan fitur Campaign kami untuk mengoptimalkan pesan iklan Anda sehingga hasilnya lebih akurat dan sukses. Dengan Fowardin, setiap pesan iklan memiliki dampak yang lebih besar.</p>
          </div>
          <div className=" w-full lg:w-1/2 flex justify-center">
            <img src="./campaign-img.svg" alt="" className="w-full"/>
          </div>
        </div>
      </div>
    </div>

    {/* Keempat */}
    <div className="container-content flex items-center">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li className="text-black">Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5 flex flex-col lg:flex-row justify-center">
          <div className=" w-full lg:w-1/2 flex justify-center">
            <img src="./reply-img.svg" alt="" className="w-full"/>
          </div>

          <div className=" w-full flex flex-col justify-center lg:w-1/2">
            <h1 className="text-3xl font-bold">Respond Faster with the Convenience of Auto Reply</h1>
            <p className="text-xs mt-6 font-medium">Fowardin mempermudah Anda untuk memberikan respon cepat kepada pesan dari banyak kontak dan grup sekaligus. Dengan fitur Auto Reply kami, Anda dapat menjawab pertanyaan atau memberikan respon otomatis, menghemat waktu dan energi Anda. Tanggap lebih cepat dengan Fowardin.</p>
          </div>
         
        </div>
      </div>
    </div>
    {/* Kelima */}
    <div className="container-content bg-white flex items-center">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li className="text-black">Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5">
          <div className="w-full flex flex-col justify-center">
            <div className="lg:w-1/2 w-full mx-auto">
              <h1 className="text-3xl text-center text-primary font-bold">"One Step Closer to More Effective and Connected Communication!"</h1>
            </div>
          </div>
          <div className=" w-full flex justify-center flex-col lg:flex-row lg:mt-12">
            <div className="lg:w-1/4 w-full justify-center flex">
              <img src="./opportunity-img.svg" alt="" className="lg:w-full w-3/5"/>
            </div>
            <div className="lg:w-3/4 w-full flex flex-col justify-center items-center">
              <div className=" w-full flex justify-center gap-2 flex-col lg:flex-row items-center">
                <div className="lg:w-1/3 w-full">
                  <Button className="w-full" color="primary" variant="solid">
                    Bisnis dan Pemasaran
                  </Button>
                </div>
                <div className="lg:w-1/3 w-full">
                  <Button className="w-full" color="primary" variant="bordered">
                    Komersial dan Penjualan
                  </Button>
                </div>
                <div className="lg:w-1/3 w-full">
                  <Button className="w-full" color="primary" variant="bordered">
                    Organisasi Sosial
                  </Button>
                </div>
              </div>
              <div className=" w-full flex justify-center mt-4 lg:mt-6">
              <p className="text-xs font-medium">Bidang ini dapat memanfaatkan fitur Broadcast untuk mengirim promosi, pengumuman, dan informasi produk kepada pelanggan dalam jumlah besar secara efisien. Selain itu, fitur Campaign dapat membantu merencanakan dan menyampaikan pesan iklan dengan waktu yang tepat kepada target audiens yang sesuai.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    {/* Keenam */}
    <div className="container-content bg-white flex items-center lg:py-12 py-24">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-500 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li className="text-black">Pricing</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="lg:w-1/2 w-full mx-auto">
              <h1 className="text-3xl text-center font-bold">Our Pricing</h1>
            </div>
            <div className="lg:w-1/4 lg:mt-4 w-full mt-2 flex flex-col justify-center items-center">
              <div className="w-full flex justify-center border rounded-2xl shadow-sm">
                <Link color="foreground" className="w-1/2 flex justify-center py-1  rounded-2xl ">Monthly</Link>
                <Link color="foreground" className="w-1/2 flex justify-center py-1  focus:z-10 text-white bg-primary rounded-2xl ">Yearly</Link>
              </div>
            </div>
            <div className="lg:w-1/3 lg:mt-3 w-full mt-2 flex flex-col justify-center items-center">
              <div className="w-full flex justify-center border rounded-2xl shadow-sm bg-layout">
              <p className="text-xs py-1 text-primary font-medium">Hemat hingga 25% dengan paket tahunan</p>
              </div>
            </div>
          </div>
          <div className=" w-full flex justify-center mt-8 flex-col lg:flex-row lg:mt-6 ">
            <div className="w-full flex justify-center flex-col lg:flex-row items-center gap-9 lg:gap-1">
                <div className="lg:w-1/4 w-full flex flex-col  py-2 px-3">
                  <h1 className="font-bold text-2xl">Starter</h1>
                  <div className="lg:min-h-32">
                    <p className="text-xs font-medium">Mulai perjalanan Anda dengan paket Starter selama 14 hari. Nikmati pesan otomatis, siaran pesan, dan  manajemen kontak yang efisien. Dapatkan integrasi yang membantu dan sinkronisasi kontak WhatsApp.</p>
                  </div>
                  <div className="lg:min-h-11">
                    <h1 className="mt-2 font-bold text-2xl">Gratis</h1>
                    <h3 className="font-semibold text-base text-slate-400">-</h3>
                  </div>
                  <Button className="rounded mt-2" color="primary">Start Now</Button>
                  <div className="flex flex-col w-full mt-4 gap-2">
                    <div className="w-full flex">
                      <img src="./time-auto.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">100 Auto reply</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./cast.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Broadcast</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./data-exploration.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Campaign</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./contacts.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Contact</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./ad-units.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Device</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./article.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Excel / CSV Contact Import</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./sync-saved-locally.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Google Contact Sync</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-col rounded-md py-2 px-3 border-transparent shadow-md">
                  <h1 className="font-bold text-2xl">Basic</h1>
                  <div className="lg:min-h-32">
                    <p className="text-xs font-medium">Dapatkan akses selama 1 bulan dengan paket Basic. Manfaatkan fitur pesan otomatis, siaran pesan, dan manajemen kontak yang ditingkatkan. Rasakan kenyamanan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                  </div>
                  <div className="lg:min-h-11">
                    <h1 className="mt-2 font-bold text-2xl">Rp. 65.000 <span className="text-medium"> /bulan</span></h1>
                    <h3 className="font-semibold text-base text-slate-400">Rp. 650.000 <span className="text-medium"> /tahun</span></h3>
                  </div>
                  <Button className="rounded mt-2 text-white" color="warning">Get Started</Button>
                  <div className="flex flex-col w-full mt-4 gap-2">
                    <div className="w-full flex">
                      <img src="./time-auto.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">100 Auto reply</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./cast.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Broadcast</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./data-exploration.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Campaign</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./contacts.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Contact</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./ad-units.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Device</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./article.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Excel / CSV Contact Import</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./sync-saved-locally.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Google Contact Sync</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-col rounded-md py-2 px-3 ">
                  <h1 className="font-bold text-2xl">Premium</h1>
                  <div className="lg:min-h-32">
                    <p className="text-xs font-medium">Perpanjang pengalaman Anda dengan paket Premium selama 1 bulan. Nikmati manfaat pesan otomatis, siaran pesan, dan manajemen kontak tanpa batasan. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                  </div>
                  <div className="lg:min-h-11">
                    <h1 className="mt-2 font-bold text-2xl">Rp. 76.000 <span className="text-medium"> /bulan</span></h1>
                    <h3 className="font-semibold text-base text-slate-400">Rp. 800.000 <span className="text-medium"> /tahun</span></h3>
                  </div>
                  <Button className="rounded mt-2 text-white" color="primary">Get Started</Button>
                  <div className="flex flex-col w-full mt-4 gap-2">
                    <div className="w-full flex">
                      <img src="./time-auto.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">100 Auto reply</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./cast.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Broadcast</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./data-exploration.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Campaign</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./contacts.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Contact</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./ad-units.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Device</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./article.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Excel / CSV Contact Import</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./sync-saved-locally.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Google Contact Sync</p>
                    </div>
                  </div>
                </div>

                <div className="lg:w-1/4 w-full flex flex-col rounded-md py-2 px-3 ">
                  <h1 className="font-bold text-2xl">Pro</h1>
                  <div className="lg:min-h-32">
                    <p className="text-xs font-medium">Jelajahi seluruh fitur dengan paket Pro selama 1 bulan. Dapatkan keuntungan dari pesan otomatis, siaran pesan, serta manajemen kontak yang tidak terbatas. Aktifkan integrasi yang luas dengan sinkronisasi kontak Google dan WhatsApp.</p>
                  </div>
                  <div className="lg:min-h-11">
                    <h1 className="mt-2 font-bold text-2xl">Rp. 86.000 <span className="text-medium"> /bulan</span></h1>
                    <h3 className="font-semibold text-base text-slate-400">Rp. 900.000 <span className="text-medium"> /tahun</span></h3>
                  </div>
                  <Button className="rounded mt-2 text-white" color="primary">Get Started</Button>
                  <div className="flex flex-col w-full mt-4 gap-2">
                    <div className="w-full flex">
                      <img src="./time-auto.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">100 Auto reply</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./cast.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Broadcast</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./data-exploration.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Campaign</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./contacts.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">500 Contact</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./ad-units.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">50 Device</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./article.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Excel / CSV Contact Import</p>
                    </div>
                    <div className="w-full flex">
                      <img src="./sync-saved-locally.svg" alt="" className="w-5 h-5" />
                      <p className="font-medium text-sm pl-2">Google Contact Sync</p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

    {/* Ketuju */}
    <div className="container-content bg-forwardin text-white flex items-center">
      <div className="flex w-full px-16  ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-200 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li className="text-white">FAQ</li>
          <li>Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5">
          <div className="w-full flex flex-col justify-center items-center">
            <div className="lg:w-1/2 w-full mx-auto">
              <h1 className="text-2xl text-center font-bold">Frequently Asked Questions</h1>
            </div>
            <div className="lg:w-3/5 lg:mt-4 w-full mt-2 flex justify-center items-center">
              <Input type="text" className=""/>
              <Search size={40} className="pl-2"/>
            </div>
            <div className="lg:w-3/5 lg:mt-3 w-full mt-2 flex flex-col justify-center items-center lg:gap-3 gap-10">
              <div className="flex flex-col justify-center items-center w-full bg-white text-black py-2 px-4 rounded-xl mt-12">
                <div className="flex justify-between w-full items-center">
                    <h4 className="text-base font-bold">Apa itu Forwardin?</h4>
                    <Link><DeleteMin className="bg-forwardin"/></Link>
                </div>
                <div className="flex w-full mt-3">
                    <p className="text-xs font-medium">Forwardin adalah sebuah platform alat pengelolaan pesan WhatsApp yang dirancang untuk membantu Anda mengirim pesan ke banyak nomor dan grup WhatsApp secara bersamaan. Forwardin juga menyediakan berbagai fitur canggih seperti auto-reply, fitur broadcast, manajemen kampanye, serta sinkronisasi kontak WhatsApp dan kontak Google.</p>
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full bg-white text-black py-2 px-4 rounded-xl">
                <div className="flex justify-between w-full items-center">
                    <h4 className="text-base font-bold">Apakah Forwadin cocok untuk saya?</h4>
                    <Link><DeleteMin className="bg-forwardin"/></Link>
                </div>
                <div className="flex w-full">
                    
                </div>
              </div>
              <div className="flex flex-col justify-center items-center w-full bg-white text-black py-2 px-4 rounded-xl">
                <div className="flex justify-between w-full items-center">
                    <h4 className="text-base font-bold">Apakah Forwardin perlu di-install ke komputer?</h4>
                    <Link><DeleteMin className="bg-forwardin"/></Link>
                </div>
                <div className="flex w-full">
                </div>
              </div>
            </div>
          </div>
          
          </div>
      </div>
    </div>

    {/* Kedelapan */}
    <div className="container-content bg-forwardin text-white flex items-center">
      <div className="flex w-full px-16 ">
        <div className="hidden lg:flex sidebar-client w-1/5 lg:items-center ">
        <ul className="list border-solid border-l-2 pl-4 border-slate-200 font-medium text-sm text-slate-300">
          <li>Get Started</li>
          <li>Broadcast</li>
          <li>Campaign</li>
          <li>Auto Reply</li>
          <li>Opportunity</li>
          <li>Pricing</li>
          <li>FAQ</li>
          <li className="text-white">Contact Us</li>
        </ul>
        </div>
        <div className="sidebar-client w-full lg:w-4/5">
          <div className="w-full flex flex-col lg:flex-row justify-center gap-3 lg:gap-8">
            <div className="lg:w-1/3 w-full">
              <img src="./logo-white.svg" alt="" />
              <p className="text-xs font-medium mt-4">Fowardin is your ultimate communication management solution. We empower businesses of all sizes with efficient message forwarding, streamlined contact management, and powerful campaign scheduling. Our mission is to simplify your communication processes, helping you engage with your audience effectively and effortlessly. Join us in transforming your communication game today!
              </p>
            </div>
            <div className="lg:w-1/3 w-full w-full lg:mt-0 mt-8">
            <h1 className="text-xl font-bold">Contact us</h1>
              <p className="text-xs font-medium mt-4">Join our mailing list to receive updates, exclusive content, and early access to upcoming events. By signing up, you become an integral part of our community, spreading the message of compassion and making a difference.</p>
              <p className="text-xs font-medium mt-4">Email: info@fowarin</p>
              <p className="text-xs font-medium ">Phone: +1 (123) 456-7890</p>
            </div>
            <div className="lg:w-1/3 w-full lg:mt-0 mt-8">
            <h1 className="text-xl font-bold">Lets talk</h1>
              <Link className="text-xs block text-white font-medium mt-4">Facebook</Link>
              <Link className="text-xs block text-white font-medium ">Instagram</Link>
              <Link className="text-xs block text-white font-medium ">Twitter</Link>
            </div>
          </div>
          </div>
      </div>
    </div>
    <div className="w-full flex bg-forwardin text-white justify-center items-center py-24">
            <h5 className="text-xs ">Powered by</h5><span><img className="pl-3" src="./text-logo.svg" alt="" /></span>
    </div>
    </>
  );
}
