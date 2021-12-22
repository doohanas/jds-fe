<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-form 
          @submit.prevent="submitForm"
          id="form-submit"
          ref="form" 
          lazy-validation
          >
          <v-text-field
            v-model.trim="name"
            :rules="[rules.required]"
            type="text"
            label="Name"
            :value="name"
            placeholder="Name"
            prepend-inner-icon="mdi-account"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="nik"
            :rules="[rules.required, rules.isNikValidated]"
            counter="16"
            label="NIK"
            placeholder="NIK"
            prepend-inner-icon="mdi-card-account-details-outline"
            type="number"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="kartuKeluarga"
            :rules="[rules.required, rules.isKkValidated]"
            counter="16"
            label="Kartu Keluarga"
            placeholder="Kartu Keluarga"
            prepend-inner-icon="mdi-card-account-details-outline"
            type="number"
            outlined
          >
          </v-text-field>
          <v-file-input
            @change="handleNikFile"
            type="file"
            accept=".png, .jpeg, .jpg, .bmp, "
            placeholder="Select File(Foto KTP)"
            :rules="[rules.required, rules.isFileValidated]"
            show-size
            filled
          >
          </v-file-input>
          <v-file-input
            @change="handleKkFile"
            accept=".png, .jpeg, .jpg, .bmp"
            placeholder="Select File(Foto Kartu Keluarga)"
            type="file"
            :rules="[rules.required, rules.isFileValidated]"
            show-size
            filled
          >
          </v-file-input>
          <v-text-field
            v-model.number="age"
            :rules="[rules.required, rules.isAgeValidated]"
            label="Umur"
            placeholder="Umur"
            prepend-inner-icon="mdi-account"
            type="number"
            outlined
          >
          </v-text-field>
          <v-radio-group
            :rules="[rules.required]"
            label="Jenis Kelamin"
            column
          >
            <v-radio
              v-for="gender in genders"
              @click="handleGender(gender)"
              :key="gender"
              color="success"
              :label="gender"
              :value="gender"
            ></v-radio>
          </v-radio-group>
          <v-select
            v-model="provinceId"
            @change="handleProvince(provinceId)"
            :rules="[rules.required]"
            :items="provinces"
            item-text="name"
            item-value="id"
            label="Provinsi"
            prepend-inner-icon="mdi-map-marker-outline"
            outlined
            required
            >
          </v-select>
          <v-select
            v-model="regencieId"
            @change="handleRegency(regencieId)"
            @click="getRegency"
            :rules="[rules.required]"
            :items="regencies"
            item-text="name"
            item-value="id"
            value="regencieId"
            label="Kab/Kota"
            prepend-inner-icon="mdi-map-marker-outline"
            outlined
            required
          >
          </v-select>
          <v-select
            v-model="districtId"
            @change="handleDistrict(districtId)"
            @click="getDistrict"
            :rules="[rules.required]"
            :items="districts"
            item-text="name"
            item-value="id"
            label="Kecamatan"
            prepend-inner-icon="mdi-map-marker-outline"
            outlined
            required
          >
          </v-select>
          <v-select
            v-model="villageId"
            @change="handleVillage(villageId)"
            @click="getVillage"
            :rules="[rules.required]"
            :items="villages"
            item-text="name"
            item-value="id"
            value="villageId"
            label="Kelurahan/Desa"
            prepend-inner-icon="mdi-map-marker-outline"
            outlined
            required
          >
          </v-select>
          <v-textarea
            v-model="address"
            :rules="[rules.required, rules.addressValidation]"
            clearable
            clear-icon="mdi-close-circle"
            counter="255"
            label="Alamat"
            value="address"
            outlined
          >
          </v-textarea>
          <v-text-field
            v-model="rt"
            :rules="[rules.required]"
            :value="rt"
            label="RT"
            placeholder="RT"
            prepend-inner-icon="mdi-card-account-details-outline"
            type="number"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="rw"
            :rules="[rules.required]"
            :value="rw"
            label="RW"
            placeholder="RW"
            prepend-inner-icon="mdi-card-account-details-outline"
            type="number"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="salaryBeforePandemic"
            :rules="[rules.required]"
            label="Penghasilan sebelum pandemi"
            placeholder="Penghasilan sebelum pandemi"
            prepend-inner-icon="mdi-cash"
            type="number"
            outlined
          >
          </v-text-field>
          <v-text-field
            v-model="salaryAfterPandemic"
            :rules="[rules.required]"
            label="Penghasilan setelah pandemi"
            placeholder="Penghasilan setelah pandemi"
            prepend-inner-icon="mdi-cash"
            type="number"
            outlined
          >
          </v-text-field>
          <v-radio-group
            :rules="[rules.required]"
            :value="other"
            label="Alasan membutuhkan bantuan"
          >
            <v-radio
              v-for="reason in reasons"
              @click="handleReason(reason)"
              :key="reason"
              color="success"
              :label="reason"
              :value="reason"
            ></v-radio>
            <v-spacer class="d-inline-flex">
            <v-radio
              class="d-inline pr-2"
              :value="other"
              label="Lainnya:"
              color="success"
            >
            </v-radio>
            <v-text-field
              v-model="other"
              :value="other"
              regular
              dense
            >
            </v-text-field>
            </v-spacer>
          </v-radio-group>
          <v-checkbox
            :rules="[rules.required]"
            label="Saya menyatakan bahwa data yang diisikan adalah benar 
            dan siap mempertanggungjawabkan apabila ditemukan ketidaksesuaian dalam data tersebut."
          >
          </v-checkbox>
          <v-btn
            type="submit"
            form="form-submit"
            color="green"
          >
            Submit
          </v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Form",
  data: () => ({
    rules: {
      required: value => !!value || 'Required',
      isNikValidated: value => value === null || (value.length >= 16 && value.length <= 16) || 'Nomor NIK terdiri dari 16 angka',
      isKkValidated: value => value === null || (value.length >= 16 && value.length <= 16) || 'Nomor KK terdiri dari 16 angka',
      isAgeValidated: value => value >= 25 || 'Minimal usia 25 tahun',
      isFileValidated: value => !value || value.size < 2000000 || 'Maksimal ukuran file 2 MB dan format file wajib png, jpeg, jpg, atau bmp',
      addressValidation: value => value.length <= 255 || "Maksimal 255 Karakter"
   },
   name: '',
   nik: null,
   kartuKeluarga: null,
   nikFile: [],
   kkFile: [],
   age: null,
   genders: ["Laki-laki", "Perempuan"],
   gender: '',
   reasons: ['Kehilangan pekerjaan', 'Kepala keluarga terdampak atau korban Covid-19', 'Tergolong fakir/miskin semenjak sebelum Covid-19'],
   reason: '',
   other: '',
   provinces: [],
   provinceId: null,
   province: '',
   regencies: [],
   regencieId: null,
   regency: '',
   districts: [],
   districtId: null,
   district: '',
   villages: [],
   villageId: null,
   village: '',
   address: '',
   rt: null,
   rw: null,
   salaryBeforePandemic: null,
   salaryAfterPandemic: null,
   member: [],
  }),
  methods: {
    handleNikFile(file) {
      if(file !== null) {
        if(file.size < 2000000 && (file.type ===  "image/png" || "image/jpeg" || "image/jpg" || "image/bmp") ) {
          this.nikFile = file
          // console.log(this.nikFile)
        } else {
          alert('File anda harus kurang dari 2MB dan berformat png/jpeg/jpg/bmp')
        }
      }
    },
    handleKkFile(file) {
      if(file !== null) {
        if(file.size < 2000000 && (file.type ===  "image/png" || "image/jpeg" || "image/jpg" || "image/bmp") ) {
          this.kkFile = file
          // console.log(this.kkFile)
        } else {
          alert('File anda harus kurang dari 2MB dan berformat png/jpeg/jpg/bmp')
        }
      }
    },
    handleGender(gender) {
      this.gender = gender
    },
    handleProvince(id) {
      for(const province of this.provinces) {
        if(province.id === id) {
          this.province = province.name
        }
      }
    },
    handleRegency(id) {
      for(const regency of this.regencies) {
        if(regency.id === id) {
          this.regency = regency.name
        }
      }
    },
    handleDistrict(id) {
      for(const district of this.districts) {
        if(district.id === id) {
          this.district = district.name
        }
      }
    },
    handleVillage(id) {
      for(const village of this.villages) {
        if(village.id === id) {
          this.village = village.name
        }
      }
    },
    getRegency() {
      this.axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/regencies/${this.provinceId}.json`)
        .then(regencies => this.regencies = regencies.data)
        .catch(() => alert('Pilih Provinsi'))
    },
    getDistrict() {
      this.axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/districts/${this.regencieId}.json`)
        .then(districts => this.districts = districts.data)
        .catch(() => alert('Pilih Kota'))
    },
    getVillage() {
      this.axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/villages/${this.districtId}.json`)
        .then(villages => this.villages = villages.data)
        .catch(() => alert('Pilih Kecamatan'))
    },
    handleReason(reason) {
      this.reason = reason
    },
    formIsValidated() {
      if(this.$refs.form.validate()) {
        const memberInput = {
          name: this.name,
          nik: parseInt(this.nik),
          kartuKeluarga: parseInt(this.kartuKeluarga),
          nikFile: this.nikFile,
          kkFile: this.kkFile,
          age: this.age,
          gender: this.gender,
          province: this.province,
          regency: this.regency,
          district: this.district,
          village: this.village,
          salaryBeforePandemic: parseInt(this.salaryBeforePandemic),
          salaryAfterPandemic: parseInt(this.salaryAfterPandemic),
          address: this.address,
          rt: parseInt(this.rt),
          rw: parseInt(this.rw),
          other: this.reason || this.other
      }
        this.member = memberInput
        alert('Data anda berhasil dikirim silahkan lihat di console, Terima Kasih')
        console.log(this.member)
      } else {
        alert('Mohon cek kembali data anda')
      }
    },
    submitForm() {
      setTimeout(() => {
        if(Math.random() < 0.8) {
          this.formIsValidated()
        } else {
          alert('Coba kembali')
        }
      }, 1500)
    },
  },
  created() { 
    this.axios.get(`http://www.emsifa.com/api-wilayah-indonesia/api/provinces.json`)
      .then(provinces => this.provinces = provinces.data)
      .catch(error => console.log(error))
  }
};
</script>
