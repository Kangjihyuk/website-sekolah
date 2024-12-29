import react from "react";
import { Link } from "react-router-dom";
const Tugas = () => {
  return (
    <>
      <section className="flex justify-center mt-10 relative">
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
        <div>
          <Link
            to={"/"}
            className="text-white font-bold absolute top-0 left-0 py-2 px-5 bg-primary rounded-lg -translate-y-10"
          >
            {"<- "}to landingPage
          </Link>
        </div>
      </section>
    </>
  );
};

export default Tugas;
