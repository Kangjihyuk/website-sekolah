import react, { useState } from "react";
import Icon from "../components/Elements/Icon";
import Hamburger from "../components/Elements/Hamburger";
import Menu from "../components/Fragments/Menu";
import Button from "../components/Elements/Button";
const Tugas = () => {
  const scroll = () => {
    if (window.scrollY > 0) {
      document.querySelector(".item").classList.add("translate-x-full");
    } else {
      document.querySelector(".item").classList.remove("translate-x-0");
      setOpen(false);
    }
  };

  window.onscroll = () => {
    scroll();
    const peer = document.querySelector(".peer");
    peer.checked = false;
  };
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  return (
    <>
      <div className="flex items-center pl-[2rem] pr-[2rem] py-[1rem] justify-between relative bg-primary lg:fixed lg:w-full z-10 overflow -mt-24">
        <Icon />
        <Hamburger handleOpen={handleOpen} />
        <Menu open={open} scroll={scroll} />
        <Button buttonName="Get Started" customization="hidden sm:block" />
      </div>
      <section className="flex justify-center mt-24 relative">
        <table border="0">
          <tr>
            <td>
              <label htmlFor="Nama">Nama</label>
            </td>
            <td>:</td>
            <td colSpan="2">
              <input type="text" id="Nama" placeholder="enter your name" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Tgllahir">Tanggal Lahir</label>
            </td>
            <td>:</td>
            <td>
              <input type="date" id="Tgllahir" />
            </td>
          </tr>
          <tr>
            <td>
              <label>Agama</label>
            </td>
            <td>:</td>
            <td colSpan="2">
              <div>
                <input type="radio" id="Islam" name="agama" value="Islam" />
                <label htmlFor="Islam">Islam</label>
              </div>
              <div>
                <input type="radio" id="Kristen" name="agama" value="Kristen" />
                <label htmlFor="Kristen">Kristen</label>
              </div>
              <div>
                <input type="radio" id="Hindu" name="agama" value="Hindu" />
                <label htmlFor="Hindu">Hindu</label>
              </div>
              <div>
                <input
                  type="radio"
                  id="Protestan"
                  name="agama"
                  value="Protestan"
                />
                <label htmlFor="Protestan">Protestan</label>
              </div>
              <div>
                <input type="radio" id="Budha" name="agama" value="Budha" />
                <label htmlFor="Budha">Budha</label>
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Hobi">Hobi</label>
            </td>
            <td>:</td>
            <td colSpan="2">
              <div>
                <input
                  type="checkbox"
                  id="Olahraga"
                  name="hobi[]"
                  value="Olahraga"
                />
                <label htmlFor="Olahraga">Olahraga</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="BacaMajalah"
                  name="hobi[]"
                  value="Baca Majalah"
                />
                <label htmlFor="BacaMajalah">Baca Majalah</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Memancing"
                  name="hobi[]"
                  value="Memancing"
                />
                <label htmlFor="Memancing">Memancing</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  id="Lainnya"
                  name="hobi[]"
                  value="Lainnya"
                />
                <label htmlFor="Lainnya">Lainnya</label>
                <input type="text" id="HobiLainnya" placeholder="Isi lainnya" />
              </div>
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="FileKTP">File KTP</label>
            </td>
            <td>:</td>
            <td colSpan="2">
              <input type="file" id="FileKTP" name="FileKTP" />
            </td>
          </tr>
          <tr>
            <td>
              <label htmlFor="Komentar">Komentar</label>
            </td>
            <td>:</td>
            <td colSpan="2">
              <textarea
                name="Komentar"
                id="Komentar"
                rows="4"
                cols="30"
                placeholder="Describe yourself here..."
              ></textarea>
            </td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td colSpan="2">
              <button type="submit">Send</button>
              <button type="reset">Reset</button>
            </td>
          </tr>
        </table>
      </section>
    </>
  );
};

export default Tugas;
