<template>
    <MerchantNavBar/>
    <div class="container" v-if="user">
        <div class="center">
            <div class="imageDiv">
                <img :src="imageUrl || 'https://i.ibb.co/vhNdMn5/upload-icon.png'" class="merchant-image"><br>
                <input type="file" @change="onUpload" accept=".jpg,.png">
            </div>
            <div class="profileDiv">
                <form @submit.prevent="updateProfile">
                    <input type="text" placeholder="Company Name" v-model="name">
                    <input type="text" placeholder="Type of Business" v-model="businessType">
                    <input type="text" placeholder="Email" v-model="email" readonly>
                    <input type="text" placeholder="Operating Hours" v-model="operatingHours">
                    <input type="text" placeholder="Location" v-model="location">
                    <input type="tel" placeholder="Phone Number" v-model="phoneNumber">
                    <input type="text" placeholder="Bank Number" v-model="bankNumber">
                    <button type="submit" id="save">Save</button>
                </form>
                <button @click="" id="changePassword">Change Password</button>
                <button @click="signOut" id="signOut">Sign Out</button>
            </div>
        </div>
    </div>
</template>

<script>
import MerchantNavBar from '@/components/MerchantNavBar.vue';
import { getAuth, onAuthStateChanged, signOut } from "@firebase/auth";
import { getFirestore, getDoc, getDocs, updateDoc, collection, doc, query, where } from "firebase/firestore";
import firebaseApp from '../firebase.js';
import router from '../router';

const db = getFirestore(firebaseApp);

export default {
  name: "MerchantProfile",
  components: {
    MerchantNavBar,
  },
  data() {
    return {
      user: false,
      userId: "",
      imageUrl: "",
      name: "",
      businessType: "",
      email: "",
      operatingHours: "",
      location: "",
      phoneNumber: "",
      bankNumber: ""
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        this.user = user;
        const merchantDocQuery = query(collection(db, "merchants"), where('email', '==', user.email))
        const merchantDocsRef = await getDocs(merchantDocQuery)
        let merchantDocRef
        merchantDocsRef.forEach((doc) => {
          merchantDocRef = doc
          this.userId = doc.id
        })
        this.imageUrl = merchantDocRef.data().imageUrl
        this.name = merchantDocRef.data().name
        this.businessType = merchantDocRef.data().businessType
        this.email = merchantDocRef.data().email
        this.operatingHours = merchantDocRef.data().operatingHours
        this.location = merchantDocRef.data().location
        this.phoneNumber = merchantDocRef.data().phoneNumber
        this.bankNumber = merchantDocRef.data().bankNumber
        // fetch the saved profile image
      }
    });
  },
  methods: {
    async updateProfile() {
        const merchantDoc = await doc(db, "merchants", this.userId)
        await updateDoc(merchantDoc, {
            imageUrl: this.imageUrl,
            name: this.name,
            businessType: this.businessType,
            operatingHours: this.operatingHours,
            location: this.location,
            phoneNumber: this.phoneNumber,
            bankNumber: this.bankNumber
        })
        // check if the profile has been filled up
        const merchantDocRef = await getDoc(doc(db, "merchants", this.userId))
        for (const key in merchantDocRef.data()) {
            const value = merchantDocRef.data()[key]
            if (value === "") {
                await updateDoc(merchantDoc, {
                    updatedProfile: false,
                })
                break;
            }
            await updateDoc(merchantDoc, {
                updatedProfile: true,
            })
        }
        alert("Profile successfully updated!")
    },
    async onUpload(event) {
        const file = event.target.files[0]
        const reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = () => {
            this.imageUrl = reader.result
      }
    },
    async signOut() {
        await signOut(getAuth(firebaseApp))
        router.push("/login")
    }
  }
};
</script>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
        height: 100vh;
        background-color: #F5F5EF;
        background-size: cover;
        position: relative;
    }
    .center {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;
	}
    .imageDiv {
        margin-top: 20px
    }
    .profileDiv {
        margin-left: 20px
    }
    .CustomerNavBar {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
    }
    .merchant-image {
        width: 500px;
        height: 500px;
        border: 2px solid #000;
    }
    input[type="file"] {
        font-family: 'Nunito Sans';
        font-size: 16px;
    }
    input[type="file"]::-webkit-file-upload-button {
        font-family: 'Nunito Sans';
        font-size: 16px;
        color: #fff;
        background-color: #16703C;
        padding: 10px 15px;
        border-radius: 30px;
        cursor: pointer;
        outline: none;
    }
    input[type="text"], input[type="tel"], input[type="password"] {
		display: block;
		width: 200px;
		margin-bottom: 10px;
		padding: 10px;
		border: none;
		border-radius: 30px;
		box-shadow: 0px 0px 5px #999;
		font-size: 16px;
		font-family: 'Nunito Sans';
	}
	#save, #changePassword {
		display: block;
		width: 220px;
		margin-bottom: 10px;
		padding: 10px;
		border: none;
		border-radius: 30px;
		box-shadow: 0px 0px 5px #999;
		background-color: #16703C;
		color: #fff;
		font-size: 16px;
		font-family: 'Nunito Sans';
		cursor: pointer;
	}
    #signOut {
        display: block;
        width: 220px;
        margin-bottom: 10px;
        padding: 10px;
        border: 2px solid #16703C;
        border-radius: 30px;
        box-shadow: 0px 0px 5px #999;
        background-color: transparent;
        color: #000;
        font-size: 16px;
        font-family: 'Nunito Sans';
        cursor: pointer;
    }
</style>