(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pekerjaan "],{"18a6":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid p-0"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-12"},[e("div",{staticClass:"row"},[e("SidebarSet"),e("div",{staticClass:"col-md-8 col-xl-10"},[e("div",{staticClass:"tab-content"},[e("DataPekerjaan")],1)])],1)])])])},r=[],i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card"},[e("div",{staticClass:"card-body"},[t._m(0),e("br"),e("form",[t._m(1),e("div",{staticClass:"p-2 mb-2 bg-biru-accent text-dark"},[t._v("\n        *Isi kolom identitas wali berikut jika ada.\n      ")]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"nmPerusahaan"}},[t._v("Nama Perusahaan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_name,expression:"form.company_name"}],staticClass:"form-control",attrs:{type:"text",id:"nmPerusahaan",placeholder:"Nama Perusahaan"},domProps:{value:t.form.company_name},on:{input:function(a){a.target.composing||t.$set(t.form,"company_name",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"jenisUsaha"}},[t._v("Jenis Badan Usaha")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.company_category_id,expression:"form.company_category_id"}],staticClass:"form-control",attrs:{type:"text",id:"jenisUsaha",placeholder:"Nama Perusahaan"},domProps:{value:t.form.company_category_id},on:{input:function(a){a.target.composing||t.$set(t.form,"company_category_id",a.target.value)}}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputAddress"}},[t._v("Alamat Perusahaan")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.form.address,expression:"form.address"}],staticClass:"form-control",attrs:{type:"text",id:"inputAddress",placeholder:"Alamat Perusahaan"},domProps:{value:t.form.address},on:{input:function(a){a.target.composing||t.$set(t.form,"address",a.target.value)}}})]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputProv"}},[t._v("Provinsi")]),e("select",{staticClass:"form-control",attrs:{id:"inputProv"}},[null==t.getDataProvinsi.province?e("option",{attrs:{disable:""}},[t._v("\n              Pilih Provinsi\n            ")]):e("option",{attrs:{disable:""}},[t._v(t._s(t.getDataProvinsi.province))]),t._l(t.getDataProvinsi,(function(a){return e("option",{key:a.province_id,domProps:{value:a.province_id}},[t._v("\n              "+t._s(a.province)+"\n            ")])}))],2)]),t._m(2)]),e("div",{staticClass:"form-row"},[e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputHp"}},[t._v("Telepon")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputHp",placeholder:"Telepon"},domProps:{value:t.getDataStatus.telephone_number}})]),e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputPostal"}},[t._v("Kode Pos")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputPostal",placeholder:"Kode Pos"},domProps:{value:t.getDataStatus.postal}})])]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputJabatan"}},[t._v("Jabatan")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputJabatan",placeholder:"Jabatan"},domProps:{value:t.getDataStatus.position}})]),e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"inputBidangUsh"}},[t._v("Bidang Usaha")]),e("input",{staticClass:"form-control",attrs:{type:"text",id:"inputBidangUsh",placeholder:"Bidang Usaha"},domProps:{value:t.getDataStatus.job_field}})]),e("button",{staticClass:"btn btn-primary btn-success",attrs:{type:"submit"}},[t._v("\n        SIMPAN\n      ")])])])])},o=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("h3",{staticClass:"text-dark"},[e("strong",[t._v("Ubah Data Pekerjaan")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group"},[e("label",{attrs:{for:"stkerja"}},[t._v("Status Pekerjaan")]),e("select",{staticClass:"form-control",attrs:{id:"stkerja"}},[e("option",[t._v("Bekerja")]),e("option",[t._v("Tidak Bekerja")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"form-group col-md-6"},[e("label",{attrs:{for:"inputKokab"}},[t._v("Kota/Kabupaten")]),e("select",{staticClass:"form-control",attrs:{id:"inputKokab"}},[e("option",{attrs:{selected:""}},[t._v("Pilih Kota/Kabupaten...")])])])}],n=e("1da1"),l=e("5530"),c=(e("96cf"),e("bc3a")),d=e.n(c),u=e("2f62"),m={name:"DataPekerjaan",data:function(){return{provinsi:[],form:{company_name:null,company_category_id:null,job_field_id:null,position:null,telephone_number:null,address:null,province_id:null,city_id:null,districts_id:null,village_id:null,rt:null,rw:null,postal:null}}},computed:Object(l["a"])({},Object(u["c"])({getDataStatus:"stkerja/datastkerja",getDataProvinsi:"provinsi/dataprovinsi",getUserNpm:"authentication/users"})),methods:Object(l["a"])(Object(l["a"])({},Object(u["b"])({datastatus:"stkerja/stkerja",dtprovinsi:"provinsi/provinsi"})),{},{getDTKERJA:function(){this.datastatus()},getPilihProvinsi:function(){this.dtprovinsi()},submit:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var e,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.prev=0,e={company_name:t.form.company_name,company_category_id:t.form.company_category_id,job_field_id:t.form.job_field_id,position:t.form.position,telephone_number:t.form.telephone_number,address:t.form.address,province_id:t.form.province_id,city_id:t.form.city_id,districts_id:t.form.districts_id,village_id:t.form.village_id,rt:t.form.rt,rw:t.form.rw,postal:t.form.postal},a.next=4,d.a.put("/oasis/job",e);case 4:return s=a.sent,"success"===s.data.meta.status?t.notyf.success({message:s.data.meta.message,dismissible:!1,duration:5e3}):t.notyf.error({message:s.data.meta.message,dismissible:!1,duration:5e3}),a.abrupt("return",s);case 9:a.prev=9,a.t0=a["catch"](0),console.warn(a.t0);case 12:case"end":return a.stop()}}),a,null,[[0,9]])})))()}}),mounted:function(){this.getDTKERJA(),this.dtprovinsi()}},p=m,v=e("2877"),f=Object(v["a"])(p,i,o,!1,null,null,null),_=f.exports,g=e("ab82"),b={name:"Pekerjaan",components:{DataPekerjaan:_,SidebarSet:g["a"]}},h=b,C=Object(v["a"])(h,s,r,!1,null,null,null);a["default"]=C.exports},"2f85":function(t,a,e){"use strict";e("897e")},"897e":function(t,a,e){},ab82:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"col-md-4 col-xl-2"},[e("div",{staticClass:"card"},[t._m(0),e("div",{staticClass:"list-group list-group-flush",attrs:{role:"tablist"}},[e("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",to:"/pemutahiran-data/biodata",role:"tab"}},[t._v("\n        Biodata\n      ")]),e("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",to:"/pemutahiran-data/data-orang-tua",role:"tab"}},[t._v("\n        Orang Tua/Wali\n      ")]),e("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",to:"/pemutahiran-data/pendidikan",role:"tab"}},[t._v("\n        Asal Pendidikan\n      ")]),e("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",to:"/pemutahiran-data/pekerjaan",role:"tab"}},[t._v("\n        Pekerjaan\n      ")]),e("router-link",{staticClass:"list-group-item list-group-item-action",attrs:{"data-toggle":"list",to:"/pemutahiran-data/upload-data",role:"tab"}},[t._v("\n        Upload Data\n      ")])],1)])])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"card-header"},[e("h5",{staticClass:"card-title mb-0"},[t._v("Edit Data")])])}],i={name:"SidebarSet"},o=i,n=(e("2f85"),e("2877")),l=Object(n["a"])(o,s,r,!1,null,null,null);a["a"]=l.exports}}]);
//# sourceMappingURL=pekerjaan .92ee0725.js.map