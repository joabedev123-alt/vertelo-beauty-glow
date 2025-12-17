import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
    {
        question: "Como faço para agendar um horário?",
        answer: "O agendamento é feito exclusivamente pelo WhatsApp. Basta clicar no botão flutuante ou nos links de contato do site para falar diretamente comigo."
    },
    {
        question: "Vocês realizam teste de maquiagem para noivas?",
        answer: "Sim! O teste é fundamental e está incluso no pacote do Dia da Noiva. Realizamos o teste com antecedência para garantir que tudo saia perfeito no grande dia."
    },
    {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos Pix, dinheiro e cartões de crédito/débito. Para reserva de datas (especialmente noivas e formandas), solicitamos um sinal de entrada."
    },
    {
        question: "Preciso levar algum produto para a maquiagem?",
        answer: "Não, todo o material utilizado é fornecido por mim. Trabalho com produtos profissionais de alta qualidade e durabilidade. Caso tenha alguma alergia, por favor informe no agendamento."
    },
    {
        question: "O curso de automaquiagem fornece certificado?",
        answer: "O foco do curso de automaquiagem é o aprendizado pessoal, mas fornecemos uma declaração de participação e apostila digital para consulta."
    }
];

const FAQSection = () => {
    return (
        <section id="faq" className="section-padding bg-secondary/30">
            <div className="container-narrow max-w-2xl">
                {/* Section Header */}
                <div className="text-center mb-12 animate-fade-up">
                    <span className="inline-block text-sm font-body text-primary tracking-widest uppercase mb-3">
                        Dúvidas
                    </span>
                    <h2 className="font-heading text-3xl sm:text-4xl font-medium text-foreground mb-4">
                        Perguntas Frequentes
                    </h2>
                    <div className="w-16 h-0.5 bg-primary/30 mx-auto" />
                </div>

                <Accordion type="single" collapsible className="w-full animate-fade-up delay-100">
                    {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`item-${index}`} className="mb-4 border border-border/50 bg-background rounded-xl px-4">
                            <AccordionTrigger className="font-body text-foreground hover:text-primary transition-colors text-left">
                                {faq.question}
                            </AccordionTrigger>
                            <AccordionContent className="font-body text-muted-foreground leading-relaxed">
                                {faq.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </section>
    );
};

export default FAQSection;
