
import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Phone, MapPin, Clock, Sparkles, Heart, Leaf, Users, MessageCircle } from 'lucide-react';

const Index = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      category: "Massages Relaxants",
      icon: <Heart className="w-6 h-6" />,
      treatments: [
        { name: "Massage Suédois", duration: "60 min", price: "25,000" },
        { name: "Massage aux Pierres Chaudes", duration: "75 min", price: "35,000" },
        { name: "Massage Aromathérapie", duration: "60 min", price: "30,000" },
        { name: "Massage du Dos", duration: "30 min", price: "15,000" }
      ]
    },
    {
      category: "Soins du Visage",
      icon: <Sparkles className="w-6 h-6" />,
      treatments: [
        { name: "Soin Hydratant Premium", duration: "60 min", price: "20,000" },
        { name: "Soin Anti-âge Gold", duration: "75 min", price: "40,000" },
        { name: "Nettoyage en Profondeur", duration: "45 min", price: "18,000" },
        { name: "Masque Purifiant", duration: "30 min", price: "12,000" }
      ]
    },
    {
      category: "Rituels Bien-être",
      icon: <Leaf className="w-6 h-6" />,
      treatments: [
        { name: "Hammam Traditionnel", duration: "45 min", price: "22,000" },
        { name: "Gommage Corps Complet", duration: "60 min", price: "28,000" },
        { name: "Enveloppement Détox", duration: "90 min", price: "45,000" },
        { name: "Rituel Couple", duration: "120 min", price: "80,000" }
      ]
    }
  ];

  const galleryImages = [
    "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1596178065887-1198b6148b2b?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1515377905703-c4788e51af15?w=600&h=400&fit=crop",
    "https://images.unsplash.com/photo-1591343395902-bfe0b6d23b19?w=600&h=400&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-md border-b border-gold/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-white rounded-lg p-2">
              <img 
                src="/lovable-uploads/3b653b41-45b1-4b4f-95cb-b669ada248d9.png" 
                alt="Lola SPA Logo" 
                className="h-8 w-auto"
              />
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#accueil" className="hover:text-gold transition-colors">Accueil</a>
            <a href="#soins" className="hover:text-gold transition-colors">Nos Soins</a>
            <a href="#apropos" className="hover:text-gold transition-colors">À Propos</a>
            <a href="#galerie" className="hover:text-gold transition-colors">Galerie</a>
            <a href="#contact" className="hover:text-gold transition-colors">Contact</a>
          </div>
          <Button className="bg-gold hover:bg-gold/80 text-black font-semibold">
            Réserver
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="accueil" className="relative h-screen flex items-center justify-center">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('https://images.unsplash.com/photo-1540555700478-4be289fbecef?w=1920&h=1080&fit=crop')"
          }}
        />
        <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="bg-white rounded-lg p-4 inline-block mb-8">
            <img 
              src="/lovable-uploads/3b653b41-45b1-4b4f-95cb-b669ada248d9.png" 
              alt="Lola SPA Logo" 
              className="h-24 w-auto animate-fade-in"
            />
          </div>
          <h1 className="text-5xl md:text-7xl font-light mb-6 text-white">
            Votre Évasion <span className="text-gold font-normal">Bien-être</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-gray-200 font-light">
            Découvrez l'art du bien-être dans un cadre luxueux et apaisant
          </p>
          <Button size="lg" className="bg-gold hover:bg-gold/80 text-black font-semibold px-8 py-3 text-lg">
            Découvrir nos soins
          </Button>
        </div>
      </section>

      {/* Services & Pricing */}
      <section id="soins" className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Nos <span className="text-gold">Soins & Tarifs</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Une sélection de soins premium pour votre bien-être absolu
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-white/5 border-gold/20 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 group">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="text-gold mr-3 group-hover:scale-110 transition-transform">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-light text-gold">{service.category}</h3>
                  </div>
                  <div className="space-y-4">
                    {service.treatments.map((treatment, idx) => (
                      <div key={idx} className="flex justify-between items-center py-3 border-b border-gray-700 last:border-b-0">
                        <div>
                          <h4 className="font-medium text-white">{treatment.name}</h4>
                          <p className="text-gray-400 text-sm">{treatment.duration}</p>
                        </div>
                        <Badge variant="outline" className="bg-gold/10 text-gold border-gold/30">
                          {treatment.price} FCFA
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="apropos" className="py-20 bg-white text-black">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light mb-6">
                À Propos de <span className="text-gold">Lola SPA</span>
              </h2>
              <p className="text-lg mb-6 text-gray-700 leading-relaxed">
                Depuis notre création, Lola SPA s'impose comme une référence du bien-être haut de gamme. 
                Nous créons un havre de paix où luxe et sérénité se rencontrent pour offrir une expérience 
                unique à notre clientèle mixte.
              </p>
              <p className="text-lg mb-8 text-gray-700 leading-relaxed">
                Nos thérapeutes experts utilisent les meilleures techniques traditionnelles et modernes 
                dans un cadre raffiné, avec des produits premium soigneusement sélectionnés.
              </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <Users className="w-8 h-8 text-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black">Mixte</h4>
                  <p className="text-sm text-gray-600">Hommes & Femmes</p>
                </div>
                <div className="text-center">
                  <Star className="w-8 h-8 text-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black">Premium</h4>
                  <p className="text-sm text-gray-600">Qualité supérieure</p>
                </div>
                <div className="text-center">
                  <Heart className="w-8 h-8 text-gold mx-auto mb-2" />
                  <h4 className="font-semibold text-black">Bien-être</h4>
                  <p className="text-sm text-gray-600">Votre évasion</p>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&h=800&fit=crop"
                alt="Intérieur Lola SPA"
                className="rounded-lg shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gold text-black p-6 rounded-lg">
                <h4 className="font-bold text-lg">+500</h4>
                <p className="text-sm">Clients satisfaits</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Notre <span className="text-gold">Galerie</span>
            </h2>
            <p className="text-gray-300 text-lg">Découvrez l'ambiance luxueuse de notre spa</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryImages.map((image, index) => (
              <div key={index} className="group relative overflow-hidden rounded-lg aspect-square">
                <img 
                  src={image}
                  alt={`Galerie Lola SPA ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Sparkles className="text-gold w-8 h-8" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Contact & <span className="text-gold">Réservation</span>
            </h2>
            <p className="text-gray-300 text-lg">Prenez rendez-vous pour votre moment de détente</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-gold">Informations pratiques</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-center space-x-4">
                  <MapPin className="text-gold w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white">Adresse</h4>
                    <p className="text-gray-300">Mosquée de la paix - Akanda, Libreville, Gabon</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Phone className="text-gold w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white">Téléphone</h4>
                    <p className="text-gray-300">+241 77 17 66 55</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <Clock className="text-gold w-6 h-6" />
                  <div>
                    <h4 className="font-semibold text-white">Horaires</h4>
                    <p className="text-gray-300">Lun-Sam: 9h-21h | Dim: 10h-18h</p>
                  </div>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-gray-800 rounded-lg h-64 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="text-gold w-12 h-12 mx-auto mb-4" />
                  <p className="text-gray-300">Carte interactive à venir</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <h3 className="text-2xl font-light mb-8 text-gold">Demande de réservation</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Input 
                    placeholder="Prénom" 
                    className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                  />
                  <Input 
                    placeholder="Nom" 
                    className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                  />
                </div>
                
                <Input 
                  type="email" 
                  placeholder="Email" 
                  className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                />
                
                <Input 
                  type="tel" 
                  placeholder="Téléphone" 
                  className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                />
                
                <Input 
                  placeholder="Soin souhaité" 
                  className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400"
                />
                
                <Textarea 
                  placeholder="Message (optionnel)"
                  className="bg-white/10 border-gold/30 text-white placeholder:text-gray-400 min-h-[100px]"
                />
                
                <Button className="w-full bg-gold hover:bg-gold/80 text-black font-semibold py-3">
                  Envoyer la demande
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gold/20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="bg-white rounded p-1">
                <img 
                  src="/lovable-uploads/3b653b41-45b1-4b4f-95cb-b669ada248d9.png" 
                  alt="Lola SPA Logo" 
                  className="h-6 w-auto"
                />
              </div>
              <span className="text-white font-light">© 2024 Lola SPA - Tous droits réservés</span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Instagram</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">Facebook</a>
              <a href="#" className="text-gray-400 hover:text-gold transition-colors">WhatsApp</a>
            </div>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a 
        href="https://wa.me/24177176655"
        className="fixed bottom-6 right-6 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
        target="_blank"
        rel="noopener noreferrer"
      >
        <MessageCircle className="w-6 h-6" />
      </a>
    </div>
  );
};

export default Index;
