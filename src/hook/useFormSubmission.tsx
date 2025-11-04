import { useMutation } from "@tanstack/react-query";
import { API_URL } from "../config/api";
import isErrorResponse from "../util/isErrorResponse";
import { FormSubmissionData } from "../interface/FormSubmissionData";


const formSubmission = async (formData: FormSubmissionData) => {
    const response = await fetch(`${API_URL}/forms/submit-form`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    });

    if(!response.ok) {
        let error: any;
        const contentType = response.headers.get("content-type");
        
        if (contentType && contentType.includes("application/json")) {
            try {
                error = await response.json();
            } catch (e) {
                error = { message: 'Erro ao processar resposta do servidor' };
            }
        } else {
            const text = await response.text();
            error = { message: text || 'Erro ao enviar formulário' };
        }
        
        console.error('Server error response:', error);
        
        if(isErrorResponse(error)) {
            throw error;
        } else {
            throw new Error(error.message || 'Erro ao enviar ao formulário');
        }
    }

    return response.json();
}

const useFormSubmission = () => {
    return useMutation({
        mutationFn: (formData: FormSubmissionData) => formSubmission(formData),
    });
}

export default useFormSubmission;