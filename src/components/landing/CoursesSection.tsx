import { Check, Calendar, Award, Clock, BookOpen, Gift, Users, BadgeCheck, Camera, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import academyImage from "@/assets/noivas/depoimentos/academy/PHOTO-2025-12-17-05-49-46.jpg";
import courseVideo from "@/assets/noivas/depoimentos/academy/course_preview.mp4";
import certificationImage from "@/assets/noivas/depoimentos/academy/certification_moment.jpg";

const CoursesSection = () => {
    return (
        <section id="cursos" className="bg-background relative">
            {/* Academy Hero Section */}
            <div className="relative py-20 lg:py-28 bg-[#1a1a1a] text-white overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent opacity-30" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />

                <div className="container-narrow relative z-10 text-center animate-fade-up">
                    <span className="inline-block px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary-foreground/90 text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm">
                        Academy Thaynara Vertelo
                    </span>
                    <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Aprenda com quem <br className="hidden md:block" /> é <span className="text-primary italic">referência</span>
                    </h2>
                    <p className="font-body text-lg md:text-xl text-white/70 leading-relaxed max-w-2xl mx-auto">
                        Descubra segredos e técnicas exclusivas através de uma metodologia de ensino prática, personalizada e humanizada.
                    </p>
                </div>
            </div>

            <div className="section-padding container-narrow relative">

                {/* Authority & Experience */}
                <div className="mb-20 animate-fade-up">
                    <div className="bg-secondary/30 rounded-3xl p-6 md:p-8 border border-primary/10">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                            {/* Image Column */}
                            <div>
                                <div className="relative rounded-2xl overflow-hidden shadow-lg">
                                    <img
                                        src={academyImage}
                                        alt="Thaynara Vertelo ensinando"
                                        className="w-full h-auto rounded-2xl"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                                    <div className="absolute bottom-6 left-6 right-6 text-white">
                                        <p className="font-heading font-bold text-xl">Mentora VIP</p>
                                        <p className="text-sm text-white/90">Especialista em formação profissional</p>
                                    </div>
                                </div>
                            </div>

                            {/* Content Column */}
                            <div className="space-y-6">
                                <div>
                                    <h3 className="font-heading text-2xl md:text-3xl font-semibold text-foreground mb-4">
                                        Experiência que transforma carreiras
                                    </h3>
                                    <p className="font-body text-muted-foreground leading-relaxed text-lg">
                                        Conhecida por seu atendimento exclusivo e humanizado, Thaynara construiu uma agenda dos sonhos e agora dedica-se a formar novos talentos.
                                    </p>
                                </div>

                                <p className="font-body text-muted-foreground leading-relaxed">
                                    Seu objetivo é muito mais do que ensinar técnicas: é treinar profissionais para se destacarem no mercado, deixando sua marca no mundo através de um trabalho de excelência. Ela recebe alunos de todo o país que buscam sua metodologia única de "Beleza Real".
                                </p>

                                <div className="grid grid-cols-2 gap-4 pt-4">
                                    <div className="bg-background p-4 rounded-xl shadow-sm border border-border/50 text-center flex flex-col justify-center items-center h-full">
                                        <h4 className="font-heading text-2xl font-bold text-primary mb-1">8+</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-medium leading-tight">Anos de XP</p>
                                    </div>
                                    <div className="bg-background p-4 rounded-xl shadow-sm border border-border/50 text-center flex flex-col justify-center items-center h-full">
                                        <h4 className="font-heading text-2xl font-bold text-primary mb-1">VIP</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-medium leading-tight">Atendimento</p>
                                    </div>
                                    <div className="bg-background p-4 rounded-xl shadow-sm border border-border/50 text-center flex flex-col justify-center items-center h-full">
                                        <h4 className="font-heading text-2xl font-bold text-primary mb-1">Map</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-medium leading-tight">Metodologia</p>
                                    </div>
                                    <div className="bg-background p-4 rounded-xl shadow-sm border border-border/50 text-center flex flex-col justify-center items-center h-full">
                                        <h4 className="font-heading text-2xl font-bold text-primary mb-1">100%</h4>
                                        <p className="text-xs text-muted-foreground uppercase font-medium leading-tight">Prático</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Video Section: Course in Practice */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-up">
                    {/* Video Column - Constrained width to fit vertical or horizontal video nicely without cropping */}
                    <div className="order-2 lg:order-1 flex justify-center lg:justify-end">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 bg-black max-w-sm w-full">
                            <video
                                src={courseVideo}
                                className="w-full h-auto object-contain"
                                autoPlay
                                loop
                                muted
                                playsInline
                            />
                        </div>
                    </div>

                    {/* Content Column */}
                    <div className="order-1 lg:order-2 space-y-6 text-center lg:text-left">
                        <div>
                            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                Metodologia Exclusiva
                            </span>
                            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Como funciona o curso <br /> <span className="text-primary italic">na prática?</span>
                            </h3>
                            <p className="font-body text-muted-foreground text-lg leading-relaxed">
                                Esqueça aulas apenas teóricas. Aqui você aprende colocando a mão na massa desde o primeiro momento.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-start text-left bg-secondary/20 p-4 rounded-xl border border-border/50">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                    <Users className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Modelos Reais</h4>
                                    <p className="text-sm text-muted-foreground">Você pratica em modelos reais (não apenas em bonecas) para vivenciar os desafios de diferentes tipos de pele e formatos de rosto.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start text-left bg-secondary/20 p-4 rounded-xl border border-border/50">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                    <BadgeCheck className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Supervisão Total</h4>
                                    <p className="text-sm text-muted-foreground">Thaynara acompanha cada traço seu, corrigindo postura, pressão do pincel e acabamento em tempo real.</p>
                                </div>
                            </div>

                            <div className="flex gap-4 items-start text-left bg-secondary/20 p-4 rounded-xl border border-border/50">
                                <div className="bg-primary/10 p-2 rounded-full shrink-0">
                                    <Camera className="w-6 h-6 text-primary" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Portfólio Imediato</h4>
                                    <p className="text-sm text-muted-foreground">Saia do curso já com fotos e vídeos profissionais das maquiagens que você produziu para divulgar seu trabalho.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Certification Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 animate-fade-up">
                    {/* Content Column */}
                    <div className="space-y-6 text-center lg:text-left">
                        <div>
                            <span className="inline-block px-3 py-1 mb-4 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">
                                Certificação Profissional
                            </span>
                            <h3 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
                                Prepare-se para um <br /> <span className="text-primary italic">novo futuro</span>
                            </h3>
                            <p className="font-body text-muted-foreground text-lg leading-relaxed">
                                Ao finalizar o curso, você não leva apenas um certificado para casa. Você leva a segurança e a bagagem técnica necessária para se posicionar como uma autoridade na área.
                            </p>
                        </div>

                        <div className="space-y-4">
                            <div className="flex gap-4 items-center text-left p-4 rounded-xl border border-primary/20 bg-primary/5">
                                <Award className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-foreground">Certificado Reconhecido</h4>
                                    <p className="text-sm text-muted-foreground">Símbolo de que você aprendeu com uma referência no mercado.</p>
                                </div>
                            </div>
                            <div className="flex gap-4 items-center text-left p-4 rounded-xl border border-border/50 bg-background">
                                <Sparkles className="w-8 h-8 text-primary shrink-0" />
                                <div>
                                    <h4 className="font-bold text-foreground">Segurança Técnica</h4>
                                    <p className="text-sm text-muted-foreground">Domine produtos, pincéis e técnicas para qualquer tipo de pele.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Column */}
                    <div className="flex justify-center lg:justify-start">
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-border/50 max-w-md w-full rotate-2 hover:rotate-0 transition-transform duration-500">
                            <img
                                src={certificationImage}
                                alt="Aluna recebendo certificado"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-40" />
                            <div className="absolute bottom-6 left-6 text-white">
                                <p className="font-heading font-bold text-lg">Sua Carreira Começa Aqui</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Course 1: Automaquiagem */}
                <div className="grid grid-cols-1 gap-16 mb-24">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border/50 animate-fade-up">
                        <div className="bg-primary/5 p-8 md:p-12 border-b border-border/50">
                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wide">
                                            Iniciante
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-accent text-foreground/80 text-xs font-bold uppercase tracking-wide">
                                            Autoestima
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
                                        Curso de Automaquiagem
                                    </h3>
                                    <p className="font-body text-muted-foreground max-w-xl">
                                        Aprenda a valorizar sua própria beleza no dia a dia. Descubra os produtos certos para sua pele e técnicas para se maquiar sozinha com segurança.
                                    </p>
                                </div>
                                <div className="text-right shrink-0 bg-white p-6 rounded-2xl shadow-sm border border-border/50 min-w-[200px]">
                                    <p className="text-sm text-muted-foreground mb-1">Investimento</p>
                                    <p className="text-3xl font-heading font-bold text-primary">R$ 549,00</p>
                                    <p className="text-xs text-muted-foreground mt-1">ou parcele no cartão (consulte taxas)</p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
                            {/* Specifics */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-lg font-medium flex items-center gap-2">
                                    <Clock className="w-5 h-5 text-primary" />
                                    Detalhes
                                </h4>
                                <ul className="space-y-4">
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                            <span className="font-bold text-primary">3h</span>
                                        </div>
                                        <span>Duração intensiva</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                            <Check className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>Indicado para iniciantes</span>
                                    </li>
                                    <li className="flex items-center gap-3 text-sm text-muted-foreground">
                                        <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center shrink-0">
                                            <Gift className="w-4 h-4 text-primary" />
                                        </div>
                                        <span>Material p/ execução incluso</span>
                                    </li>
                                </ul>
                            </div>

                            {/* What you learn */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-lg font-medium flex items-center gap-2">
                                    <Sparkles className="w-5 h-5 text-primary" />
                                    O que você aprende
                                </h4>
                                <ul className="space-y-2">
                                    {["Análise de kit pessoal", "Preparação de pele correta", "Contorno e iluminação", "Correção de sobrancelhas", "Delineado", "Transformação Dia x Noite", "Aplicação de cílios postiços"].map(item => (
                                        <li key={item} className="flex items-start text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Included */}
                            <div className="space-y-6">
                                <h4 className="font-heading text-lg font-medium flex items-center gap-2">
                                    <BadgeCheck className="w-5 h-5 text-primary" />
                                    Bônus & Inclusos
                                </h4>
                                <ul className="space-y-2">
                                    {["Apostila digital (PDF)", "Certificado de conclusão", "Lista de materiais sugeridos", "Lojas parceiras com desconto", "Coffee break", "Consultoria via WhatsApp"].map(item => (
                                        <li key={item} className="flex items-start text-sm text-muted-foreground">
                                            <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className="p-8 border-t border-border/50 bg-secondary/10 flex justify-center">
                            <Button size="lg" className="w-full md:w-auto min-w-[250px]" asChild>
                                <a href="https://wa.me/5531993339605?text=Ol%C3%A1!%20Quero%20me%20inscrever%20no%20Curso%20de%20Automaquiagem." target="_blank" rel="noopener noreferrer">
                                    Quero me inscrever
                                </a>
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Course 2: Professional VIP */}
                <div className="grid grid-cols-1 mb-16">
                    <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border/50 animate-fade-up">
                        <div className="bg-primary/5 p-8 md:p-12 border-b border-border/50">
                            <div className="flex flex-col md:flex-row justify-between md:items-start gap-6">
                                <div>
                                    <div className="flex gap-2 mb-2">
                                        <span className="px-3 py-1 rounded-full bg-primary text-white text-xs font-bold uppercase tracking-wide">
                                            Profissionalizante
                                        </span>
                                        <span className="px-3 py-1 rounded-full bg-accent text-foreground/80 text-xs font-bold uppercase tracking-wide">
                                            Carreira
                                        </span>
                                    </div>
                                    <h3 className="font-heading text-3xl md:text-4xl font-medium text-foreground mb-4">
                                        Curso Profissional VIP
                                    </h3>
                                    <p className="font-body text-muted-foreground max-w-2xl">
                                        Formação intensiva e personalizada para quem deseja iniciar ou se aprimorar na carreira de maquiadora. Aulas práticas com modelos e supervisão total.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-8 md:p-12">
                            {/* Detailed Modules Grid */}
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                                {/* Module 1 */}
                                <div className="bg-secondary/20 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <h4 className="font-heading text-lg font-bold text-primary mb-2">Módulo Iniciante</h4>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold">R$ 1.199</span>
                                        <span className="text-xs text-muted-foreground">/curso</span>
                                    </div>
                                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                                        <li className="flex items-center"><Clock className="w-3 h-3 mr-2" /> 6h de duração</li>
                                        <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> 2 técnicas de olhos</li>
                                        <li className="flex items-center"><Users className="w-3 h-3 mr-2" /> Prática em 2 modelos</li>
                                    </ul>
                                </div>
                                {/* Module 2 */}
                                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/20 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 bg-primary text-white text-[10px] uppercase font-bold px-2 py-1 rounded-bl-lg">
                                        Mais completo
                                    </div>
                                    <h4 className="font-heading text-lg font-bold text-primary mb-2">Módulo Avançado</h4>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold">R$ 1.599</span>
                                        <span className="text-xs text-muted-foreground">/curso</span>
                                    </div>
                                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                                        <li className="flex items-center"><Clock className="w-3 h-3 mr-2" /> 8h de duração</li>
                                        <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> 3 técnicas completas</li>
                                        <li className="flex items-center"><Users className="w-3 h-3 mr-2" /> Prática em 2 modelos</li>
                                    </ul>
                                </div>
                                {/* Module 3 */}
                                <div className="bg-secondary/20 p-6 rounded-2xl border border-border/50 hover:border-primary/30 transition-colors">
                                    <h4 className="font-heading text-lg font-bold text-primary mb-2">Especialização Noivas</h4>
                                    <div className="flex items-baseline gap-1 mb-4">
                                        <span className="text-2xl font-bold">R$ 999</span>
                                        <span className="text-xs text-muted-foreground">/curso</span>
                                    </div>
                                    <ul className="text-sm text-muted-foreground space-y-2 mb-4">
                                        <li className="flex items-center"><Clock className="w-3 h-3 mr-2" /> 4h de duração</li>
                                        <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> 2 técnicas (Pele Blindada)</li>
                                        <li className="flex items-center"><BookOpen className="w-3 h-3 mr-2" /> Gestão de Carreira</li>
                                    </ul>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                {/* Included Content */}
                                <div className="space-y-6">
                                    <h4 className="font-heading text-lg font-medium flex items-center gap-2">
                                        <BookOpen className="w-5 h-5 text-primary" />
                                        Conteúdo Programático
                                    </h4>
                                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2">
                                        {["Postura profissional & Biossegurança", "Colorimetria e Visagismo", "Fotografia e Marketing", "Preparação de pele (Tipos e Tons)", "Correção facial (Luz e Sombra)", "Morfologia dos olhos", "Pele resistente para atendimento", "Cílios, batom e sobrancelhas"].map(item => (
                                            <li key={item} className="flex items-start text-sm text-muted-foreground">
                                                <Check className="w-4 h-4 text-primary mr-2 mt-0.5" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>

                                <div className="space-y-6">
                                    <h4 className="font-heading text-lg font-medium flex items-center gap-2">
                                        <Gift className="w-5 h-5 text-primary" />
                                        Incluso no VIP
                                    </h4>
                                    <div className="bg-secondary/10 p-6 rounded-xl border border-border/50">
                                        <ul className="space-y-3">
                                            <li className="flex items-center text-sm text-foreground/80"><Check className="w-4 h-4 text-primary mr-2" /> Modelos profissionais para portfólio</li>
                                            <li className="flex items-center text-sm text-foreground/80"><Check className="w-4 h-4 text-primary mr-2" /> Todo material para execução</li>
                                            <li className="flex items-center text-sm text-foreground/80"><Check className="w-4 h-4 text-primary mr-2" /> Apostila impressa e Certificado</li>
                                            <li className="flex items-center text-sm text-foreground/80"><Check className="w-4 h-4 text-primary mr-2" /> Assessoria, Coffee break e Descontos</li>
                                        </ul>
                                    </div>
                                    <Button size="lg" className="w-full" asChild>
                                        <a href="https://wa.me/5531993339605?text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20o%20Curso%20Profissional%20VIP." target="_blank" rel="noopener noreferrer">
                                            Quero me profissionalizar
                                        </a>
                                    </Button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Important Terms */}
                <div className="text-center md:text-left text-xs text-muted-foreground/60 max-w-4xl mx-auto space-y-1">
                    <p>* Para agendar é necessário pagamento de 30% do valor para reserva.</p>
                    <p>* Formas de pagamento: Pix, Dinheiro ou Cartão de Crédito (até 5x com juros).</p>
                    <p>* Tolerância de atraso: 15 minutos.</p>
                </div>

            </div>
        </section>
    );
};

export default CoursesSection;
