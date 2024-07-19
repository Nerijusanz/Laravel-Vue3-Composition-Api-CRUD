import { ref } from 'vue'
import axios from "axios";
import { useRouter } from 'vue-router';



export default function useCompaniesComposable() {

    const base_url = '/api/v1';
    const component_url = '/companies';

    const companies = ref([])
    const company = ref([])
    const router = useRouter()
    const errors = ref('')

    const getCompanies = async () => {
        const base_component_url = base_url+component_url;
        let response = await axios.get(base_component_url)
        companies.value = response.data.data;
    }

    const getCompany = async (id) => {
        const base_component_url = base_url+component_url+'/'+id;
        let response = await axios.get(base_component_url)
        company.value = response.data.data;
    }

    const storeCompany = async (data) => {
        const base_component_url = base_url+component_url;
        errors.value = ''
        try {
            await axios.post(base_component_url, data)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const updateCompany = async (id) => {
        const base_component_url=base_url+component_url+'/'+id;
        errors.value = ''
        try {
            await axios.put(base_component_url, company.value)
            await router.push({name: 'companies.index'})
        } catch (e) {
            if (e.response.status === 422) {
                errors.value = e.response.data.errors
            }
        }
    }

    const destroyCompany = async (id) => {
        const base_component_url = base_url+component_url+'/'+id;
        await axios.delete(base_component_url)
    }


    return {
        companies,
        company,
        errors,
        getCompanies,
        getCompany,
        storeCompany,
        updateCompany,
        destroyCompany
    }
}
