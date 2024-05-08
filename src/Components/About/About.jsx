import { styles } from "../../style";
const Team = [

  {
    image_src:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIALcAwwMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAACAwABBAUGB//EAEUQAAEDAgMEBwUDCQYHAAAAAAEAAgMEEQUSIQYTMUEiUWGBkaHRBxQyYnFCUrEVFiNzgoOSk8EzRGPi8PEXJFNywtLh/8QAGgEAAgMBAQAAAAAAAAAAAAAAAQIAAwQFBv/EAC8RAAICAQMCAwcDBQAAAAAAAAABAgMRBBIhEzEiQVEFYXGhsdHwMoGRFELB4fH/2gAMAwEAAhEDEQA/APJgiCBEFvM4YRNQhEE6FYwJzEhqaxWplbMliewrGaU9hV0WVSRkNKa0rHaU1pV8ZFLQ8FMaVjgowVYpCOI8OUzJIcrzJtwNo26rMl5lC5TcTaEXIXFAXISUrkFRI4pTirJS3FVORYkLeUh5TnFIeVTJlsUJkSXJrylOVEmXIFUrVJBhIVhCiCrHCCMIAiCKAwwmsSgmBWoRj2JzSsdhTmlWplbQ9pTGlIaUbTfq71YpFbRmUsE9TJu6aJ0j7XytF/8AX9eCfBSlwMlRmiY12QNI6TnXta34/wC6yqgNocFkkYMxAAI63Zbk+GUfQlYFbVVb6Cnlllkkk3TRvJHFxJ1Aue4+K5lntJvMYL4M6Nfs9cOb+KLlj3bWPuMslyzW5tdLzJ2Gw0m7p/ypXhrMp6DGuc9xB4XykDr56EaLoIXbLtlD46OSoa2N43b6l2rraOc2wJA7NFtq1a2Le+THbp3vexcHM5lMy2Wz2A1OLtrTPPFSmjZd9wXlx4izfiykAnNblbUggKnwTE4YxKKR88LiQ2amIma7vbe3etCtjLszO4NPDMAuQkoTdpc1wIINiCNQe1CSi5EUSyUtxVkoHFI2OkA4pTyjcUp5VUmWJCnJTkxyWVUyxAqlapJkfAlEEKtIOywjahCIIihtTQUlqYE6YrQ1qa0pLSmtKsTEaMiFkkr2xxNLnngF0OF4aRTSSxwwyPa05pqh4sOxjDx/7vwXMtcQQWuLXDgQnflGspjmilkkj5tc7UfRZdZK3b4Oxp0kanLx9/I35qqSsopKd7MjuLmtdYno5bi+hFgNNPqtMZyzDfdXnMGEZJLcbEkfT4lq66vimcHwl8bwLua61r9iVDib49HjNfjpxXKS45R1GbJu5qyBnEU4+F3I/VW55hO7nsHjg9h4LXPlhnZmZZr+oDh3JJqXEiOQlxtZpTt5KsbWbmPHaqkZLkkJcYywkG129nkoMVrmR0ppKqWOSMh8TmPIs7sWhncXMN+IuHeCcagRRMceLWgeHFM7J4WGSNcMvK7m7pHS4lSurHTbyd5c+RtukSXHN696C4tpqtfhs0jYnlj3RmpkyODNC8E3Lb8urvWzqqeamkLZ2tD76hvAHmFu0mrcpdOb58vz3GXV6RKtW1rjz/PLIolASoShJW9s5yQLilOKNxSnFI2OkA5LcmOSyq2OgVFFEowhEFRVhIMWiCFEEURhhGEtqYEwobUxqU1NanTFaGclnVT5JqD3dhgjghaHGQR5XPd2/ePJYAKlZLC+LdSR7yodo17nZger/X48s+qm1A0aaCcmKpdmsWroI6iGK0cou06i+vFbqg9m2L1IBlkyj6L12kbQYVhkLq6SKnhhjazM8gDQcB26cE2DbLZhoAbWk26qaX/1XEldN/pOr04x78s81i9k+JuaN3VMB+dnosjC/ZZXtxWCTF3Uj6OM3e1r3Ev7OGnivVMP2owPEqptJRVofO4EtYYntvbjxA5J2K1cFHSy1NQ/LFC0ve617AC50Vbtmu5ItN4wcDXeznZ1xu2GePsExsudxjYLCmRO93lqI3DgS+66qu25wYXLHTv7WxW/FaGt2xwiqBbnmjuPilj08ing7R5qs8+loDh9Q9ku9lDP7NzNMq6DEXRVWGQ193Nlkf8AC4WsNb35k3F/oVi43v4nipgLt2/QSNFwbrDgiqWUglqWv3covFmB6+I8e9a6/FbW0+U/+oqknCmyLXDXn8iHS2pNxzQkqE/7oSV28nCwUSlOTHFLKVsZIApbkbkDkgyBUUUQGwJVqBRKMEEQQhEFABBGEARhHIMBhGEARBNkmBg7+5Na2TQmRrInEZnOHEX5aFZOz9LHW43Q0s2scszQ4dYvcjwC7b2sU+bDKSoYzL7rKGaN0EZHD6XAWPU3wTVcl3Nempm07I+RlTYrSY6GVUWCyV9PTAtZJWStigB5kDUuPK9tLdZK0lbg1fVQurKfZmeCntcPppnZSOu2QXWVgcjpMHw+nYLsa1uccjZ/TB7NHJHtlqsZMkVAyMy4bLBE5v6LMWvBJJB5Ek2PYGrDXWpTcUu3xNVtsq4RlnuK2RbT0eP0k9WamnkDiIt9o3MQRa4Nr6812+29fFDhM0U08RbNGQ4F/Fp05a8xwXnuHuq6rY7E5MQpo4o44mFrWsIAcwDW2vS0aT2u4LBq9l8RoqKhxCoaCKtv6OMDpNcWktB+vJCVEN/ifIVfNpNITTYfJXOd7nTSytbqXySNY0DrN72HaSFt48LxLDmsL6Gl3cujXmUOYey7bha+sZiH5nUsmGWfDMZWVlow+9y3LxGnRGhGurutFsucWmoPcZA4RBm7hiyBttb3Nhqbl3HW1uxXOvMM4KldLqbUzGxaW9OKB8LqZzX5m5emwG/AIJm1BoaWNwc9kDXAkC+U5yCPLxJW9xOhZNJiRkjzugw2edl/suc4Na4dvRctbhFPGGWveRo6TjxJ61RHU10tS28r/K+x0KtLZq90HLC+z/18jTjr6+aolOrYxDVTRs+FrzZIK7kZqUU15nn51uEnF+QJKAoihKGQbQCgcjKByGQ4BUUUQCKCsIVYQCWiCFEFCYDCIIQiCmQ4DCMIAjCmSYMmiqn0dXBUxfHC8PbfrC9PxfaHANpdm5YZqyOlmfFYslHSa7iDa+tj1LykIh281nvojdht4aL6bnVlYyeo0G6wl7a7dvnwycb4OhF307iBm6P2mO+LTUEnQ3K3z9qtjqmly1NfE9g13b6eUEfRpb/RcZsVjsb6NtBV2DohZt+beru0XVPoqWrcN02OMn7TWC64d17ptcZLlfsdmGnjdWpKXH0MWpmg2i3cNDh8lNs3SuE1RI+LJ7yRq1gZa+QGxJ0vbgFj7a4xhtXhzo4ayR7tHMdoC1wILS3qIIFrLrKH32jbuveqR8IHQMkbmn9rX8B3LUYzhdNLKahzMGjl45mNeST/AAhB2zk1JcY+AKq6otxaz+fA5/CsWpsPhDcYpJqcyNzGSnhMkMl9bgN1aTzaR9DbRZdRtVgMULvcop5nEWDIoDFf6ufaw8foVjxwyz1bffKmPcNPwxsIv3knRDjLqZjCyJjT1X1KktVzyi6vRp8Jv8/YwaaRkmD49iVe8MEzGRWiaS1gzNa1redh18zc81zLKmGkc8iUSF3BrAthtLXMgwyDB4XAudJv6q3AG3RZ4Ek/srmiTpdatHpOtF22t+J/LsZb9dLTzlVSlhcZ9/n+epcr3SSOe/VziXH6lLKslVddtPHBxHlvLBKEoihKm4mACgKMoChkgKitRQmBPJWqVqECCIIQoEMhGBEEARBDIcDAiCWESGRsDArCAFXmDBckAdZ4KZDgdCJDMxsJtI5wa3W2pNgvSKyWHZ2i3nv8tXUh+kTGaBtud/tcz9eCfsxhNHhuF088FJA+udGHvqJmiRzXEcG30Fr20160VVh8MhzuGZjtD2dRXm9f7U0857FHOPzg73s/Szri3J4z5fcZhO1VBiA3TZ2NmHGNxsWplfUwht943tOi86xXBxTY1VMYbOblkjPWOH9EBrZImZXMuevPoqHUpJOtl8NTVGcoz4aOgxDFoKd4Bly5jYdZ7gsnB34diEckUtTLS1pN4KghrmgjgHNI4dfNcIC+tr425wX3ubHgAtoYCy7nSBrB8RJsrXVGDWe5ZVqY2RljheqG7T0MFNJS1dKbNrI88kQNxHKAC4NP3elpdaQldjgeKsqaR1PJBTz4bmylksYdm63A8Qe0arm8dw84TXGIvL4JBnp5T9tnqOBXY0urVj6cv1I4ms0nT8cOYswSqupc8badaElbcmHBChJUKElHIMFFCVZQlQDRSiiigMClYVBWEQFhWhRBAZIIIggRBBjBgoggCIJcjpBjkun2WkqsHH5VEUQE946d8jQ4ixGYgHhrYX7CuWOjSb2AGp6l6BtS1sGG4cxjcjWDK1trWFgsmo1GycIY/U/osl9dO6Epehnfnvipv/zDT27tuvkp+e2K/wDXZ/LZ6LjRKpvVNqKss7A7YYg74pIv5LPRAdrq7m+E/uGei5Leqb1HBDrPztruT4h+4Z6Jbtra48ZYz+5Z6LlTKq3qmCZOpO1mI2sJIwP1LPRIm2pr5Wlr5WZf1beHgubMqWZVMEyYtW4PqZHAAXN7N4JBW8xShkdgOHYgxrXNbnZM4Wu0ZujmHHm7VaLmrKrVYsr3r+OB51uPf3fMolCVZQlW5K8FFCVZVIoVopRRRMKLCipEERUiIghtfgthQR0xY99RGZbakNeW5fVK3gdIwhxThE8i44LZ1WFtfFDU0cbmxPfkczV4Z2l3DVeq4TsNQOwS1ZHknIJ3l73Flg1mvr0qi5+Zqqo3Jts8VItoe9bzaqCJk2GVdNBFDFW4ZTzZImBrRIG5X2A0+JpWuxaJkFfLHE4Oax5APWhqMQmqKWio593u6ON7ILDpBrnFxza6i50WlPOGI47W0zoPZ/Qtq8XkmdFvHUzA9uYaNcTYE9umgXRe0FzjSUjnjpbx3PsWn2fx/C9m8Mije2eaqqTneyJtzfk3w/FHtTj0eMUlO1tFW0rmPLrVMRYCCOR5rhWK+32hGxRexcfJm9qFemcG1uf8nO5lM6Aql2Dm4GF6rOgKpTJAy9VnQlCUQBF6Em6oqjwUJg7TD6WOo2ehjlke1ksDmEtaCBe9ie+y4WaOSKaSKUAPY4tcByIJB/BdvRY7T0mB00MNNU1MscYzmGPQHXiSuYxysp8ReyrhjdHIbsma69yRwJ7eR+gXN0E7I3TjJcNs6mp6c6oOL8SSNYUKsqiuwc5glCVZVFMhGgVFFFBcC0QQhEE4pY1WRBUZIXsF+mDw+ix12GDbJUtRhTarE31DZ5OkxkbrAN5X7efeooSm8RGUclYFjLsPYxtNXRxPLS6dtTTB0d79EN6JPDW/YtnXbdYrJDJRh9K6O+UviY6zx2Bx4H6Dl9FwuKUEtPWPjpfeC0cMxubIKaPEhoKSWQdo1WWyccbZ+RfCu2L4NxK+mnuZaSNrnX6bC5p/GyY/FKkUjaNsdKKRrMtnQNLjbrNtSsOKjxKWw/J8/flH9V1my2CU9bGyHHIXtDMwbAGOOYkg5i8HTmLeaWuyM57VJZfvLelY8Pa/4M3YPZncEY7igDBFAZYIRq4NcNHnq0vpx1Wb7TRE1tPE1zy9pa45nk6EHlw5LKrqXFKejqaaOWAQTQNp2BjHEsYCes9tu5cxthVzT1pqqw2L8rAMuUNsD2rmurUf1KlYml++DZKmMam00+P38jnSxVlQuqouTx4hLNXH98eK38nOyhuVCWpfvUf3x4oTVR/fHijhgyhtkJal+8x/fHiFDUx/fHiEeSZQyyhAtqLhK95j++PFWJ4zxe0DrupyFYZ6rs5SYUNnMJkro2S+8ZYgXm4z9XZzWn2r2UpKx1RJhLW008Eu7dC53QlOXNpf4TbhyNlhUkVVPgVJRR1UUUDJ2VLSQXOa8EED6XW3lFfUTSye9wjfSslLRHYXYLcc2l/ouPCM6rnKOeW/JnajpYyhh47epzFHsFjE9AK2sfSYfA9wDW1cpEjyeAyNBNz1G3gsX82mR4iaeqxOFkTDlfKyN7hccRoPMC31XV4xh20VeKd0ToC2Auc0tnIJcRx4DUC/iuXrdm8bdIXTUbNebXZrnzXQVuofMlgxz0sYJ92DVbP4WwvdTbR0jmA9GIxPa/vL8v4haiTCpg4tZUUL2g6H36AX7i9bBuzOJEf2OU/T1T2bMYm3W4b+2B/VXRlc+30MFldieTTfkmsOuWE9ramIjycqXRDCcWaMoqJdOqceqitzf6Iq2z/E/ucaFFCotIqGwPbHKx72hzWuByngV1cO0tFxqoHF3NobcDzXIWuEOT53Kqannwsvrs2HoEG2eGRaNwuFw6zHr+KzGe0HDWDTCID+6/8Aq81DPnPkryfOfJUuE/U0/wBTLsj09vtOo2fDhcTfpF/mR/8AFKIi7cPaP2P8y8tEfznyViP5z5Jl1V2YOvJ9z02X2oCRulC3wI/8lpcZ2qpMYpmx1NO6PK692Mv+J7Vxu7/xD5Kbr/EPkpKV0ltb4Bv5zg3G+woAdGb+WPVVvsKP2Zf5Y9VqN3/iHyU3N/tu8lR0Buq/T6G1dJhljkY8n5ox6oXvw0t/Rg5rcDHotZuPnf5eim4B4vf5einQB1H6GZSuoP0m8bk10yx3v5pjnUHIPt+rHqteIAOD39uo9FZh+d/l6I9ECm/Qzs+H82v/AIB6qCajabsa/wDhHqsDcfO/y9FNz87/AC9EOgFWteR0mH7Sx0UZZuGyt5Zxa3ms0bcZPhoIT4+q44w/O/y9FW6+dx8FojO6K2qQrm85wdqPaBMNG0MI7z6qj7QJ3Cxo4R3n1XFmL5j5Kt18x8kG7X/cHrzR2L9uZj/dYR3n1SH7ZSu400Xn6rlN18x8lDH8x8lMWeoHfI6b87JD/do/P1Vrl938x8lFMWeovWZQVqKLSZUEFYVKJRy0SiiVjogVhRRAKLCsqKIDlhRRRAJYUUUUCRQqKKEKUKiigCihKtRQBSoq1EwrKQqKIoUiiiiIh//Z",
    name: "Aron",
    Role: "Back-end developer",
  },
  {
    image_src:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-jzGaniGuc3h6Y4pbliBOd9oAAnunOLZMaw&s",
    name: "Raruu",
    Role: "Sales",
  },

  {
    image_src:
      "data:image/jpeg;base64,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",
    name: "Slim",
    Role: "Front-end developer",
  },

];
function About() {
  return (
    <>
      <div>
        <div className="mx-auto max-w-7xl px-4">
          <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
            <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
              <p className="text-xs font-semibold leading-normal md:text-sm">
                About the company
              </p>
            </div>
            <p className="text-3xl font-bold text-gray-900 md:text-5xl md:leading-10">
              Made with love, right here in Kenya!
            </p>
            <p className="max-w-4xl text-base text-gray-600 md:text-xl">
              BOOKLAB, proudly crafted in Kenya, is your go-to online bookstore for quality reading and 
              educational materials. From classic novels to workbooks and activity books for kids of all ages, we
              offer a diverse selection, including renowned brands like Usborne and DK Books. 
              Enjoy free shipping and cash on delivery services across Kenya, along with competitive prices and quick delivery,
              making BOOKLAB your trusted partner in education.
            </p>
          </div>
          <hr />
          <div className="mt-8 flex items-center">
            <div className="space-y-6 md:w-3/4">
              <div className="max-w-max rounded-full border bg-gray-50 p-1 px-3">
                <p className="text-xs font-semibold leading-normal md:text-sm">
                  Join Us →
                </p>
              </div>
              <p className="text-3xl font-bold text-gray-900 md:text-4xl">
                Meet our team
              </p>
              <p className="max-w-4xl text-base text-gray-700 md:text-xl">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <div></div>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-gray-300 py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
            {Team?.map((item, id) => (
              <div className="rounded-md border" key={id}>
                <img
                  src={item?.image_src}
                  alt="Gabrielle Fernandez"
                  className={styles.AboutImage}
                />
                <p className={styles.AboutTeam}>{item?.name}</p>
                <p className={styles.AboutTitle}>{item?.Role}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
            <div className="space-y-6">
              <p className="text-sm font-semibold md:text-base">
                Join our team →
              </p>
              <p className="text-3xl font-bold md:text-4xl">
                We&#x27;re just getting started
              </p>
              <p className="text-base text-gray-600 md:text-lg">
                Our philosophy is simple — hire a team of diverse, passionate
                people and foster a culture that empowers you to do your best
                work.
              </p>
              <button
                type="button"
                className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              >
                Join Now
              </button>
            </div>
            <div className="md:mt-o mt-10 w-full">
              <img
                src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2340&amp;q=80"
                alt="Getting Started"
                className="rounded-lg"
              />
            </div>
          </div>
          <div className="w-full space-y-4">
            <img
              className="h-[200px] w-full rounded-xl object-cover md:h-full"
              src="https://imgur.com/UfFS0NL.jpg"
              alt="nairobi"
            />
          </div>
          <div className="my-8 flex flex-col gap-y-6 md:flex-row lg:justify-around">
            <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="w-full text-xl font-semibold  text-gray-900">
                Westlands office
              </p>
              <p className="w-full text-base text-gray-700">
                Mon-Sat 9am to 5pm.
              </p>
              <p className="text-sm font-medium">
                29 School ln,Nairobi
              </p>
            </div>
            <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="w-full text-xl font-semibold  text-gray-900">
                Parklands Head office
              </p>
              <p className="w-full text-base text-gray-700">
                Mon-Sat 9am to 5pm.
              </p>
              <p className="text-sm font-medium">
                Sports Avenue Rd
              </p>
            </div>
            <div className="flex flex-col space-y-3 md:w-2/4 lg:w-1/5">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <p className="w-full text-xl font-semibold  text-gray-900">
                Moringa office
              </p>
              <p className="w-full text-base text-gray-700">
                Mon-Sat 9am to 5pm.
              </p>
              <p className="text-sm font-medium">
                Ngong lane plaza
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
