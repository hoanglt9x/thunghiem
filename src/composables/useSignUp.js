import { ref } from "vue";
import { projectAuth } from "@/configs/firebase";

const error = ref(null);
const isPending = ref(false);

async function signup(email, password) {
  isPending.value = true;
  error.value = null;
  try {
    const response = await projectAuth.createUserWithEmail(email, password);
    if (!response) throw new Error("Không thể tạo ra tài khoản mới");
    return response;
  } catch (err) {
    console.log(err);
    error.value = err.message;
  } finally {
    isPending.value = false;
  }
}

export function useSignUp() {
  return { error, isPending, signup };
}
