const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('question_test.db');

const jsonData = [
    [
        [
            {
                "key": 31,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the purpose of modulation in a communication system?",
                "solution": "The purpose of modulation in a communication system is to superimpose a message signal onto a carrier signal for efficient transmission over long distances. Modulation helps in altering the characteristics of the carrier signal such as amplitude, frequency, or phase to encode the information from the message signal. This process allows for better signal quality, reduced interference, and increased range of communication."
            },
            {
                "key": 125,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What are the two most abundant elements in the universe?",
                "solution": "The two most abundant elements in the universe are hydrogen and helium."
            },
            {
                "key": 277,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "What is the SI unit of electric potential?",
                "solution": "The SI unit of electric potential is the volt V."
            },
            {
                "key": 275,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the approximate age of the universe according to the Big Bang Theory?",
                "solution": "According to the Big Bang Theory, the approximate age of the universe is around 13.8 billion years."
            },
            {
                "key": 67,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of static electricity and give one real-life example where static electricity is commonly observed.",
                "solution": "Static electricity is the build-up of electric charge on the surface of an object. It occurs when two objects rub against each other and transfer electrons, resulting in one object becoming positively charged and the other negatively charged. One common real-life example of static electricity is when you rub a balloon against your hair. The friction between the balloon and your hair causes electrons to transfer, leading to the balloon becoming negatively charged. The negatively charged balloon can then stick to objects like walls or ceilings due to the static electricity present. I hope this helps you understand the concept of static electricity and its real-life application."
            },
            {
                "key": 271,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the function of a demodulator in a communication system?",
                "solution": "In a communication system, the function of a demodulator is to extract the original information signal from the modulated carrier signal. Demodulation is the process of recovering the baseband signal information signal from the modulated wave, such as amplitude modulation AM or frequency modulation FM. Demodulation is essential for the receiver to retrieve and interpret the transmitted information accurately."
            },
            {
                "key": 66,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "What is the role of friction in our daily lives? Give at least three examples to explain its importance.",
                "solution": "Friction plays a crucial role in our daily lives by providing grip and stability in various situations. Here are three examples to explain its importance 1. Walking Friction between the soles of our shoes and the ground prevents slipping and helps us walk without falling. 2. Driving Friction between the tires of a vehicle and the road surface allows the vehicle to move forward and stop when brakes are applied. 3. Writing Friction between the pen tip and paper surface enables us to write smoothly and legibly. In conclusion, friction is essential for performing daily tasks safely and efficiently."
            },
            {
                "key": 61,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Describe the role of nervous system in coordinating communication within the human body.",
                "solution": "The nervous system plays a vital role in coordinating communication within the human body. It consists of the brain, spinal cord, and nerves, which work together to transmit and process information. The nervous system receives stimuli from the body's environment through sensory neurons, processes this information in the brain, and then sends out signals through motor neurons to initiate a response. This allows for quick and coordinated responses to various stimuli such as touch, sound, light, and temperature. Overall, the nervous system serves as the communication network within the human body, ensuring that different parts of the body work together efficiently and effectively."
            },
            {
                "key": 4,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon of diffraction of light? Explain with the help of a simple diagram.",
                "solution": "Diffraction of light is the bending of light waves around obstacles and the spreading of light waves as they pass through a narrow aperture. This phenomenon occurs when light waves encounter obstacles or openings that are comparable in size to the wavelength of light. It can be explained using the Huygens principle, where each point on a wavefront acts as a source of secondary wavelets. These secondary wavelets interfere with each other, leading to the bending and spreading of light waves. In the diagram below, you can see how light waves bend as they pass through a narrow slit, leading to diffraction patterns on the screen placed behind the slit. Diagram This phenomenon of diffraction is essential in understanding the behavior of light and plays a crucial role in various applications such as the design of optical instruments and the study of wave optics."
            },
            {
                "key": 38,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "What is the phenomenon that occurs when a substance is placed in a magnetic field and gets magnetized temporarily? Provide an example of a material that exhibits this property.",
                "solution": "Phenomenon The phenomenon that occurs when a substance is placed in a magnetic field and gets magnetized temporarily is called magnetic induction. Example An example of a material that exhibits this property is soft iron."
            },
            {
                "key": 248,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "What is the main function of MRI Magnetic Resonance Imaging in the medical field?",
                "solution": "MRI Magnetic Resonance Imaging is a advanced medical imaging technique that uses strong magnetic fields and radio waves to generate detailed images of the organs and tissues inside the body. The main function of MRI in the medical field is to provide clear and high-resolution images of internal body structures, such as organs, muscles, nerves, and blood vessels, without the use of harmful radiation. This helps doctors to diagnose and monitor a wide range of health conditions, including tumors, injuries, infections, and neurological disorders. In summary, the main function of MRI in the medical field is to provide non-invasive and detailed images for accurate diagnosis and treatment of various medical conditions."
            },
            {
                "key": 121,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the role of a transmitter in a communication system?",
                "solution": "In a communication system, a transmitter plays a crucial role in converting a message or information into electrical signals that can be transmitted through a medium such as wires or air. The primary function of a transmitter is to modulate the information onto a carrier signal, which carries the information over long distances efficiently. This modulated signal is then transmitted through the communication channel to the receiver end. Thus, the transmitter acts as the starting point of the communication process by converting the input information into a suitable form for transmission."
            },
            {
                "key": 2,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "In a PN junction diode, explain what happens to the majority carriers and minority carriers when the diode is forward biased and reverse biased.",
                "solution": "Forward biased Majority carriers In forward bias, the majority carriers holes in P-region and electrons in N-region gain energy due to the applied voltage and move towards the junction. Minority carriers The minority carriers electrons in P-region and holes in N-region also get a slight boost in their movement due to the applied voltage. Reverse biased Majority carriers In reverse bias, the majority carriers are pushed away from the junction due to the applied voltage, reducing the flow of current. Minority carriers The minority carriers are also pushed away from the junction, which results in a very small current due to minority carrier flow in reverse bias. In summary, in forward bias, both majority and minority carriers move towards the junction, facilitating the flow of current, whereas in reverse bias, both majority and minority carriers are pushed away from the junction, inhibiting the flow of current."
            },
            {
                "key": 122,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "In semiconductor electronics, what is the basic difference between a conductor, an insulator, and a semiconductor in terms of their conductivity?",
                "solution": "Conductor Conductor has high conductivity due to the presence of large number of free electrons that can move freely in response to an applied electric field. Insulator Insulator has very low conductivity as it lacks free electrons that can move in response to an applied electric field. The electrons in the valence band are tightly bound to the nucleus and cannot move. Semiconductor Semiconductor has conductivity between that of a conductor and an insulator. It has lesser number of free electrons compared to a conductor, but more than an insulator. The conductivity of a semiconductor can be increased by adding impurities or by applying external conditions like temperature."
            },
            {
                "key": 9,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Define magnetic field lines and explain how they are formed around a straight current-carrying wire.",
                "solution": "Magnetic field lines are imaginary lines that depict the direction in which a magnetic North pole would tend to move when placed in a magnetic field. These lines are used to visualize the magnetic field and its strength. When a straight current-carrying wire is considered, the magnetic field lines are formed around it in concentric circles. The direction of these circles is determined using the right-hand thumb rule. According to this rule, if the thumb points in the direction of the current flow, the fingers curling around the wire indicate the direction of the magnetic field lines. In summary, magnetic field lines around a straight current-carrying wire are formed in circular patterns with their direction determined by the right-hand thumb rule, providing a clear visualization of the magnetic field around the wire."
            },
            {
                "key": 258,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of diamagnetism and give an example of a diamagnetic substance.",
                "solution": "Diamagnetism is a property exhibited by certain materials that are repelled by a magnetic field. Unlike paramagnetic materials that are weakly attracted to a magnet, diamagnetic materials are weakly repelled by a magnetic field. This repulsion occurs because the electrons in diamagnetic materials rearrange themselves in the presence of a magnetic field, creating small opposing magnetic fields. An example of a diamagnetic substance is bismuth. Bismuth is a diamagnetic material because when a magnetic field is applied, its electrons rearrange in a way that creates a repulsive force to the magnetic field. Due to this repulsion, bismuth is pushed away from the magnetic field, demonstrating diamagnetic properties."
            },
            {
                "key": 251,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the role of neurotransmitters in the communication system of the human body and provide examples of neurotransmitters and their functions in different physiological processes.",
                "solution": "Neurotransmitters play a crucial role in the communication system of the human body by transmitting signals across synapses between neurons. They are chemical messengers that facilitate the transmission of nerve impulses from one neuron to another. Examples of neurotransmitters and their functions in different physiological processes include 1. Acetylcholine Responsible for muscle movement, learning, and memory. 2. Dopamine Regulates mood, behavior, and cognition. 3. Serotonin Affects mood, appetite, and sleep. 4. Noradrenaline Involved in the fight or flight response. 5. GABA Gamma-aminobutyric acid Inhibits nerve transmission, promoting relaxation. These neurotransmitters help in maintaining proper communication within the nervous system, ensuring the smooth functioning of various physiological processes in the human body."
            },
            {
                "key": 94,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "How does the phenomenon of interference occur in wave optics?",
                "solution": "Interference in wave optics occurs when two or more coherent waves superpose to form a resultant wave. Coherent waves are those that have a constant phase difference between them. This results in regions of constructive interference, where the waves reinforce each other, and regions of destructive interference, where the waves cancel each other out. The phenomenon of interference is a direct consequence of the wave nature of light, where waves can add up or cancel each other depending on their phase relationship."
            },
            {
                "key": 247,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "How does the concept of electrostatics apply to the human body? Provide an example to explain how charges are distributed in living organisms.",
                "solution": "The concept of electrostatics applies to the human body through the presence of charges on the surface of the body and the distribution of these charges. One way this is evident is through the phenomenon of static electricity, which occurs when two objects come into contact and electrons are transferred, resulting in a buildup of charge. An example of how charges are distributed in living organisms is the action potential in neurons. Neurons are specialized cells in the nervous system that transmit electrical signals. When a neuron is at rest, there is a slight negative charge inside the cell compared to the outside due to the distribution of ions. However, when a signal is received, the charge inside the cell becomes more positive, creating an electrical impulse that travels along the neuron. In conclusion, the concept of electrostatics can be observed in the human body through the distribution of charges in living organisms, such as in the action potential of neurons."
            },
            {
                "key": 323,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of chromatic aberration in the context of a compound microscope using the principles of ray optics. How does the design of the microscope minimize this optical imperfection and ensure high-quality imaging?",
                "solution": "In a compound microscope, chromatic aberration occurs due to the different colors of light bending by different amounts as they pass through the lens system. This results in a lack of focus and color fringing in the final image formed by the microscope. To minimize chromatic aberration, the microscope designers use a combination of lenses made from different types of glass that have varying refractive indices. By carefully selecting the materials and curvature of the lenses, they can ensure that the different colors of light converge at the same point, resulting in a sharp and clear image. Additionally, apochromatic lenses are often used in high-quality microscopes to further correct for chromatic aberration by bringing three wavelengths of light red, green, and blue into focus at the same point. This design feature helps in producing high-quality images with accurate color representation."
            },
            {
                "key": 105,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Hubble Law and its significance in understanding the expansion of the universe. How does Hubble's law support the Big Bang theory? 8 marks",
                "solution": "The Hubble Law states that the speed at which a galaxy is moving away from us is directly proportional to its distance from us. This means that the further a galaxy is from us, the faster it is moving away. The significance of the Hubble Law lies in its role in helping us understand the expansion of the universe. By observing the redshift of light from distant galaxies, we can determine their speed and distance, thus confirming that the universe is expanding. Hubble's law supports the Big Bang theory by providing evidence of an expanding universe. According to the Big Bang theory, the universe began as a singularity and has been expanding ever since. The Hubble Law supports this idea by showing that galaxies are moving away from each other at increasing speeds, consistent with the expanding universe concept. In conclusion, the Hubble Law is essential in understanding the expansion of the universe and provides evidence that supports the Big Bang theory."
            },
            {
                "key": 82,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Describe the function and working principle of a photodiode in semiconductor electronics. Explain how photodiodes are used in various applications for detection and sensing purposes. Provide an example of a real-world application where photodiodes are utilized and discuss its significance in that context.",
                "solution": "A photodiode is a type of semiconductor device that converts light into electrical current. It works based on the principle of the internal photoelectric effect. When light of suitable wavelength falls on the photodiode, it generates electron-hole pairs, which create a flow of current in the device. Photodiodes are commonly used in various applications for detection and sensing purposes due to their sensitivity to light. They are widely used in light sensors, optical communication systems, barcode scanners, and smoke detectors, among others. One real-world application of photodiodes is in solar panels. In this context, photodiodes are used to convert sunlight into electrical energy, which can then be used to power homes, buildings, and even entire cities. The significance of photodiodes in this application lies in their ability to harness clean and renewable energy from the sun, reducing the dependence on fossil fuels and mitigating the impact of climate change."
            },
            {
                "key": 13,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain how the focal length of a concave lens can be determined using the lens formula. A concave lens has a focal length of -15 cm. An object is placed 30 cm from the lens. Calculate the image distance and describe the nature of the image formed.",
                "solution": "To determine the focal length of a concave lens using the lens formula, we use the formula 1f 1v - 1u Where f focal length of the lens v image distance u object distance Given f -15 cm u -30 cm negative because the object is placed to the left of the concave lens Using the lens formula 1-15 1v - 1-30 -115 1v 130 -115 2 130 -115 330 -115 110 Therefore, 1v -110 v -10 cm Since the image distance is negative, the image formed is virtual, erect, and magnified. Conclusion The image distance is -10 cm and the image formed is a virtual, erect, and magnified image."
            },
            {
                "key": 104,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "A beam of light passes through a single slit and produces a diffraction pattern on a screen. Explain how the width of the single slit affects the diffraction pattern observed on the screen. Be sure to include the key principles of wave optics involved in your explanation.",
                "solution": "When a beam of light passes through a single slit, it undergoes diffraction, which leads to the spreading out of the light waves. The key principle involved in this phenomenon is Huygens' principle, which states that every point on a wavefront acts as a source of secondary wavelets that spread out in all directions. The width of the single slit significantly affects the diffraction pattern observed on the screen. A narrower slit leads to more diffraction, resulting in a wider diffraction pattern with more intensity maxima and minima. On the other hand, a wider slit results in less diffraction and a narrower diffraction pattern with fewer intensity maxima and minima. In summary, the width of the single slit directly impacts the extent of diffraction observed in the diffraction pattern on the screen. The narrower the slit, the greater the diffraction effect, leading to a wider pattern with more intensity variations."
            },
            {
                "key": 59,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A proton is moving perpendicular to a uniform magnetic field of strength 0.5 T with a velocity of 2 x 105 ms. Calculate the radius of the circular path followed by the proton due to the magnetic field. Given that the charge of a proton is 1.6 x 10-19 C and its mass is 1.67 x 10-27 kg. Use the formula for the radius of a circular path in a magnetic field r mvqB",
                "solution": "Given Strength of magnetic field, B 0.5 T Velocity of proton, v 2 x 105 ms Charge of proton, q 1.6 x 10-19 C Mass of proton, m 1.67 x 10-27 kg Formula Radius of circular path, r mv qB Substitute the given values into the formula r 1.67 x 10-27 kg x 2 x 105 ms 1.6 x 10-19 C x 0.5 T r 3.34 x 10-22 kg ms 0.8 x 10-19 C T r 4.175 x 10-3 m Therefore, the radius of the circular path followed by the proton due to the magnetic field is 4.175 x 10-3 meters."
            },
            {
                "key": 6,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "What is the force that opposes the motion of an object when it is in contact with a surface called?",
                "solution": "Answer The force that opposes the motion of an object when it is in contact with a surface is called friction."
            },
            {
                "key": 81,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the molecular mechanism by which a nerve impulse is transmitted across a synapse in the human nervous system. Include the role of neurotransmitters, receptor proteins, and the process of synaptic transmission in your explanation.",
                "solution": "- The molecular mechanism by which a nerve impulse is transmitted across a synapse involves several steps. When an action potential reaches the axon terminal of a presynaptic neuron, it triggers the release of neurotransmitters stored in synaptic vesicles. - These neurotransmitters, such as dopamine or serotonin, are released into the synaptic cleft and bind to specific receptor proteins on the postsynaptic neuron. The binding of neurotransmitters to receptor proteins causes ion channels to open, leading to a change in the postsynaptic neuron's membrane potential. - This change in membrane potential can either excite or inhibit the postsynaptic neuron, depending on the type of neurotransmitter and receptor involved. - The process of synaptic transmission is crucial for communication between neurons, allowing nerve impulses to be transmitted from one neuron to another across the synapse. - Overall, the coordinated release of neurotransmitters, their binding to receptor proteins, and the resulting changes in membrane potential are essential for the transmission of nerve impulses in the human nervous system."
            },
            {
                "key": 245,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Big Bang Theory and its significance in the origin and evolution of the universe. How has this theory shaped our understanding of the cosmos?",
                "solution": "The Big Bang Theory is the prevailing cosmological theory that explains the origin and evolution of the universe. According to this theory, the universe originated from a singular point approximately 13.8 billion years ago in a massive explosion. This explosion led to the rapid expansion of matter and energy, resulting in the formation of galaxies, stars, and planets. The significance of the Big Bang Theory lies in its ability to explain many observed phenomena in the universe, such as the uniformity of cosmic microwave background radiation and the redshift of galaxies. This theory has shaped our understanding of the cosmos by providing a framework for studying the evolution of the universe, from its initial moments to its current state. It has also led to the development of key concepts in cosmology, such as dark matter and dark energy, which are essential for understanding the structure and dynamics of the universe. Overall, the Big Bang Theory has revolutionized our understanding of the universe and continues to be a cornerstone of modern astrophysics."
            },
            {
                "key": 76,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the phenomenon of friction in terms of both static and kinetic friction with suitable examples. How does friction play a crucial role in our daily lives and in various aspects of biology?",
                "solution": "Answer Friction is a force that opposes the relative motion between two surfaces in contact. It can be classified into two types static friction and kinetic friction. 1. Static friction It is the friction force that prevents an object from moving when force is applied but without causing any motion. For example, when trying to push a heavy box, static friction keeps the box in place until the force applied overcomes it. 2. Kinetic friction It is the force that opposes the motion of an object when it is already moving. For instance, the friction between the tires of a car and the road surface while driving. Friction plays a crucial role in our daily lives and in various aspects of biology. In daily life, we walk, write, drive, and perform many other activities due to the presence of friction. In biology, friction is essential for physiological processes like muscle movement, blood circulation, and cell division. The presence of friction allows for grip while walking or running, helps the heart pump blood efficiently, and enables cells to divide and replicate accurately. Overall, friction is a fundamental force that plays a vital role in our lives and in biological processes, ensuring stability, movement, and functionality."
            },
            {
                "key": 37,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "What is the SI unit of electric charge and how is it defined?",
                "solution": "The SI unit of electric charge is Coulomb C. It is defined as the amount of charge that flows through a conductor in one second when a current of one ampere is passed through it."
            },
            {
                "key": 252,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of a p-n junction in semiconductor electronics and discuss how it is used in the functioning of a diode.",
                "solution": "A p-n junction is formed when a p-type semiconductor, which has an excess of positively charged holes, is connected to an n-type semiconductor, which has an excess of negatively charged electrons. This creates a boundary where the majority carriers of each semiconductor diffuse across, creating a depletion region with no charge carriers. In the functioning of a diode, the p-n junction plays a crucial role. When a forward bias voltage is applied across the diode, the free electrons from the n-side and the holes from the p-side are pushed towards the junction. This reduces the width of the depletion region, allowing current to flow through the diode. On the other hand, when a reverse bias voltage is applied, the depletion region widens due to the majority carriers being pulled away from the junction. This prevents current from flowing through the diode, thus acting as a barrier against reverse current. In summary, the p-n junction in a diode controls the flow of current based on the polarity of the applied voltage, allowing it to act as a one-way valve for electrical current."
            },
            {
                "key": 88,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of diamagnetic, paramagnetic, and ferromagnetic materials in the context of biomagnetism. How do these properties influence the behavior of biological systems in the presence of magnetic fields? Provide examples to support your explanation.",
                "solution": "Answer Diamagnetic materials are those that create an induced magnetic field in the opposite direction of an applied magnetic field. Paramagnetic materials are weakly attracted to magnetic fields and align themselves with the field. Ferromagnetic materials are strongly attracted to magnetic fields and can retain magnetization even after the field is removed. In the context of biomagnetism, diamagnetic materials like water and most biological tissues have a very weak response to magnetic fields. Paramagnetic materials, such as hemoglobin in blood, exhibit a slightly stronger response. Ferromagnetic materials like iron in the human body can have a significant interaction with magnetic fields. These properties can influence the behavior of biological systems in the presence of magnetic fields. For example, magnetic resonance imaging MRI utilizes the magnetic properties of different tissues to create detailed images of the body. The alignment of paramagnetic materials in cells can also affect cellular functions. In conclusion, the magnetic properties of diamagnetic, paramagnetic, and ferromagnetic materials play a crucial role in biomagnetism and can impact the behavior of biological systems in the presence of magnetic fields."
            },
            {
                "key": 250,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the difference between atomic number and mass number of an element? Give examples to illustrate your answer.",
                "solution": "Atomic number is the number of protons present in the nucleus of an atom whereas mass number is the total number of protons and neutrons in the nucleus of an atom. For example, consider an atom of carbon - Atomic number of carbon C is 6 because it has 6 protons. - Mass number of carbon C can vary depending on the isotope, but for the most common isotope, carbon-12 C-12, the mass number is 12 which is the sum of protons 6 and neutrons 6. Another example is an atom of oxygen - Atomic number of oxygen O is 8 because it has 8 protons. - For the most common isotope, oxygen-16 O-16, the mass number is 16 which is the sum of protons 8 and neutrons 8. Therefore, the key difference between atomic number and mass number is that atomic number represents the number of protons in an atom while mass number represents the total number of protons and neutrons in the nucleus of an atom."
            },
            {
                "key": 23,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "A converging lens has a focal length of 20 cm. An object is placed 30 cm away from the lens along its principal axis. Calculate the position and nature of the image formed by the lens. Also, calculate the magnification of the image.",
                "solution": "Given data Focal length of the lens, f 20 cm Object distance, u -30 cm negative because the object is placed on the same side as the incident light Using the lens formula 1f 1v - 1u 120 1v 130 120 - 130 1v 3 - 260 1v 160 1v v 60 cm As the image distance is positive, the image is formed on the opposite side of the object from the lens. Since v f, the image is formed beyond 2f, and it is a real and inverted image. Now, calculate the magnification Magnification m -vu m -60-30 m 2 Answer Position of the image 60 cm from the lens on the opposite side Nature of the image Real and inverted Magnification of the image 2"
            },
            {
                "key": 87,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "How does the concept of electrostatic charge play a role in the functioning of neurons in the human body? Explain the process in detail, highlighting the importance of electrostatic interactions in maintaining communication within the nervous system.",
                "solution": "Electrostatic charge plays a crucial role in the functioning of neurons in the human body. Neurons are specialized cells that transmit electrical impulses throughout the nervous system. When a neuron is at rest, it maintains a negative charge inside compared to the outside due to the distribution of ions across the cell membrane. This difference in charge creates an electrostatic potential, also called the resting membrane potential. When a neuron is stimulated, gates in the cell membrane open, allowing ions to flow in and out of the cell. This movement of ions creates a temporary change in the electrostatic charge of the neuron, leading to the generation and propagation of an electrical impulse called an action potential. These action potentials travel along the length of the neuron until reaching the synapse, where they trigger the release of neurotransmitters. The neurotransmitters cross the synaptic gap and bind to receptors on the next neuron, initiating a new electrical signal. The electrostatic interactions between ions, the cell membrane, and the neurotransmitters are essential for the communication within the nervous system. They allow for the rapid and precise transmission of signals, enabling various functions like movement, sensation, and cognition. In summary, electrostatic charge plays a vital role in the functioning of neurons by creating and propagating electrical impulses that facilitate communication within the nervous system."
            },
            {
                "key": 102,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "In semiconductor electronics, explain the concept of hole current and electron current. How do these currents influence the overall behavior of a semiconductor device?",
                "solution": "In semiconductor electronics, both hole current and electron current play crucial roles in the operation of semiconductor devices. 1. Hole Current In a semiconductor material, when an electron moves from its original position, it leaves behind a positively charged hole. A neighboring electron can then move into this hole, leaving behind another hole. This movement of holes constitutes the hole current. 2. Electron Current Electrons are the charge carriers in the conduction band of a semiconductor material. When a voltage is applied across the semiconductor, electrons flow from the negative terminal to the positive terminal, constituting the electron current. 3. Overall Behavior The movement of both hole current and electron current influences the behavior of semiconductor devices like diodes and transistors. In a p-type semiconductor, the dominant current is the hole current, while in an n-type semiconductor, the dominant current is the electron current. 4. Impacts The behavior and performance of semiconductor devices are dependent on the interplay between hole and electron currents. The interaction of these currents affects parameters like conductivity, mobility, and carrier density, ultimately influencing the device's overall functionality and characteristics. Understanding the concept of hole and electron currents helps in grasping the operation of semiconductor devices and is vital for students pursuing physics at the 11th-grade level."
            },
            {
                "key": 79,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain Faraday's law of electromagnetic induction and how it is related to the phenomenon of electric generators. What role does the motion of charges play in the generation of electric current in a generator? Provide an example to illustrate your answer.",
                "solution": "Faraday's law of electromagnetic induction states that a change in magnetic field around a conductor induces an electromotive force emf in the conductor. This emf causes a current to flow in the conductor if it forms a closed loop. This phenomenon is the basis for the working of electric generators. In an electric generator, a coil of wire is rotated in a magnetic field. As the coil rotates, the magnetic field through it changes, which induces an emf in the coil according to Faraday's law. This induced emf creates an electric current to flow in the coil. The motion of charges electrons is essential in the generation of electric current in a generator. When the coil rotates, the motion of charges within the wire is responsible for the induced emf and the subsequent current flow. For example, consider a simple hand-cranked generator. When the crank is turned, it rotates a coil of wire within a magnetic field. This rotation causes a change in magnetic field, inducing an emf in the coil. The motion of charges in the wire generates an electric current that can be used to power a light bulb or any other electrical device. In conclusion, Faraday's law of electromagnetic induction and the motion of charges play crucial roles in the generation of electric current in electric generators, showcasing the direct relationship between them in practical applications."
            },
            {
                "key": 64,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the unit of frequency of light waves?",
                "solution": "The unit of frequency of light waves is Hertz Hz."
            },
            {
                "key": 110,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the difference between the concepts of atomic number and mass number in an atom? Explain how these values are determined and their significance in defining the identity of an element.",
                "solution": "Atomic number and mass number are two important characteristics of an atom that help in defining the identity of an element. 1. Atomic number Atomic number is the total number of protons present in the nucleus of an atom. It is denoted by Z and determines the identity of an element. For example, hydrogen has an atomic number of 1, which means it has 1 proton in its nucleus. 2. Mass number Mass number is the sum of protons and neutrons present in the nucleus of an atom. It is denoted by A. For example, helium has a mass number of 4 because it has 2 protons and 2 neutrons in its nucleus. To determine these values - The atomic number can be found on the periodic table for each element. - The mass number can be calculated by adding the number of protons and neutrons in the nucleus. Significance - Atomic number defines the element's identity as it is unique for each element. It helps in arranging elements in the periodic table based on increasing atomic number. - Mass number helps in determining the atomic mass of an element and different isotopes of the same element. Overall, atomic number and mass number are crucial in defining the unique identity of an element and understanding its structure."
            },
            {
                "key": 101,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain how amplitude modulation AM is achieved in a communication system. Discuss the advantages and disadvantages of using AM for transmitting signals.",
                "solution": "To achieve amplitude modulation AM in a communication system, the amplitude of the carrier wave is varied in proportion to that of the message signal being transmitted. This can be done using a circuit called a modulator, which combines the carrier wave with the message signal to produce the modulated signal for transmission. Advantages of using AM for transmitting signals include 1. AM is simpler and less expensive compared to other modulation techniques. 2. AM signals can be easily demodulated using simple techniques. 3. AM signals are more resistant to noise interference over long distances. Disadvantages of using AM for transmitting signals include 1. AM signals have lower efficiency in terms of bandwidth usage compared to other modulation techniques. 2. AM signals are more susceptible to amplitude variations and can be easily distorted. 3. AM signals are less secure and are more prone to interference from other electromagnetic sources. In conclusion, while AM is a common and relatively simple modulation technique used in communication systems, it has its own set of advantages and disadvantages that need to be considered based on the specific requirements of the communication system."
            },
            {
                "key": 80,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "How does the process of radioactive decay differ from nuclear fusion and nuclear fission in terms of the stability of the atomic nucleus? Provide examples of elements or isotopes that undergo each of these processes.",
                "solution": "Radioactive decay, nuclear fusion, and nuclear fission are all processes that involve changes in the nucleus of an atom. In terms of the stability of the atomic nucleus 1. Radioactive decay Radioactive decay is the process in which an unstable atomic nucleus loses energy by emitting radiation such as alpha particles, beta particles, or gamma rays. This process results in the transformation of the parent nucleus into a more stable daughter nucleus. For example, Uranium-238 undergoes radioactive decay to form Thorium-234. 2. Nuclear fusion Nuclear fusion is a process in which two lighter atomic nuclei combine to form a heavier nucleus, releasing a large amount of energy in the process. This process is the source of energy in stars like the Sun. An example of nuclear fusion is the reaction between Deuterium and Tritium to form Helium-4. 3. Nuclear fission Nuclear fission is the process in which a heavy atomic nucleus splits into two or more lighter nuclei along with the release of energy. This process is commonly used in nuclear power plants to generate electricity. An example of nuclear fission is the reaction of Uranium-235 splitting into Barium-141 and Krypton-92. In summary, radioactive decay involves the spontaneous disintegration of an unstable nucleus, while nuclear fusion and fission involve the manipulation of atomic nuclei to release energy. Each process plays a crucial role in different contexts, whether in natural radioactive decay, energy production through nuclear fusion, or electricity generation via nuclear fission."
            },
            {
                "key": 256,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "How does friction influence the movement of organisms in their environment, and what are the biological adaptations that help organisms overcome frictional forces?",
                "solution": "Friction plays a crucial role in influencing the movement of organisms in their environment. It provides traction for organisms to walk, run, climb, and swim. Without friction, organisms would not be able to move effectively on various surfaces. However, excessive friction can also hinder movement and cause wear and tear on the organism's body. Organisms have evolved various biological adaptations to overcome frictional forces. Some common adaptations include 1. Suction cups or adhesive pads These structures allow organisms like geckos and tree frogs to stick to vertical surfaces or ceilings by creating a strong adhesive force that counteracts friction. 2. Mucus secretion Snails and slugs secrete mucus to reduce friction with the ground, allowing them to crawl smoothly. 3. Insect foot structures Insects have specialized foot structures such as claws, pads, or sticky glands that help them grip different surfaces and overcome frictional forces during locomotion. 4. Streamlined body shapes Aquatic organisms like fish and dolphins have streamlined body shapes that reduce drag from water, enabling smooth and efficient movement through water. These biological adaptations enable organisms to effectively move and thrive in their environments by minimizing the negative impacts of friction and maximizing their locomotor abilities."
            },
            {
                "key": 85,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "What role does dark matter play in shaping the structure and evolution of the universe, and how do scientists currently study and understand this elusive substance?",
                "solution": "Dark matter is a mysterious substance that makes up about 27 of the universe, yet it does not interact with light and remains invisible. Despite its elusive nature, dark matter plays a crucial role in the universe's structure and evolution. It provides the gravitational pull necessary to hold galaxies together and influences the formation of large-scale cosmic structures. Scientists study dark matter through various methods, such as gravitational lensing, cosmic microwave background radiation, and observations of galaxy rotation curves. By analyzing these phenomena, researchers can infer the presence and distribution of dark matter throughout the universe. Additionally, experiments at particle accelerators aim to directly detect dark matter particles, although this remains a significant challenge. Overall, dark matter's impact on the universe is undeniable, shaping the galaxies we see today. As scientists continue to explore this enigmatic substance, our understanding of the universe's evolution and composition deepens."
            },
            {
                "key": 27,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "A point charge of 3 C is placed at a distance of 5 cm from a point charge of -2 C. Calculate the magnitude and direction of the electrostatic force acting on each charge. Given, the value of Coulomb's constant k is 9 times 109 , N , m2C2.",
                "solution": "To calculate the magnitude and direction of the electrostatic force acting on each charge, we will use Coulomb's Law which states that the electrostatic force between two point charges is directly proportional to the product of the magnitude of the charges and inversely proportional to the square of the distance between them. Given q1 3 C q2 -2 C r 5 cm 0.05 m k 9 x 109 Nm2C2 Magnitude of the electrostatic force between the charges F k q1 q2 r2 F 9 x 109 3 -2 0.052 F 108 x 109 0.0025 F 43.2 x 1011 N F 4.32 x 1012 N The direction of the force is attractive since one charge is positive and the other is negative. Therefore, the magnitude of the electrostatic force acting on each charge is 4.32 x 1012 N and the direction of the force is attractive."
            },
            {
                "key": 14,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain the phenomenon of interference in the context of wave optics. Describe with the help of a suitable diagram how constructive and destructive interference of light waves occur. How does the path difference between two light waves determine the resulting interference pattern? Use relevant examples to support your explanation.",
                "solution": "Interference is a phenomenon that occurs when two or more waves superpose to form a resultant wave. In wave optics, interference of light waves is a key aspect where light waves combine to either strengthen constructive interference or weaken destructive interference each other. In constructive interference, when two waves with the same phase meet, their amplitudes add up to create a wave with higher intensity. This results in bright fringes on the interference pattern. On the other hand, in destructive interference, when waves with opposite phases meet, they cancel out each other's amplitudes leading to dark fringes on the pattern. The path difference between two light waves determines the resulting interference pattern. If the path difference is an integral multiple of the wavelength, constructive interference occurs and bright fringes are formed. If the path difference is a half-wavelength apart, destructive interference occurs creating dark fringes. For example, in Young's double slit experiment, when light passes through two slits, a path difference forms between the waves emerging from each slit. If this path difference is equal to the wavelength, constructive interference occurs at certain points creating bright fringes, while destructive interference leads to dark fringes at other points. In conclusion, interference in wave optics results from the superposition of light waves and is determined by the path difference between the waves. This phenomenon can be illustrated through constructive and destructive interference patterns formed in various experiments like the double-slit experiment."
            },
            {
                "key": 159,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the phenomenon that occurs when a moving charge creates a magnetic field around it? Can you provide an example of this phenomenon in everyday life?",
                "solution": "The phenomenon that occurs when a moving charge creates a magnetic field around it is called electromagnetic induction. A common example of this phenomenon in everyday life is the working of an electric motor. In an electric motor, a current-carrying wire moving charge induces a magnetic field which interacts with the permanent magnets to produce rotational motion, thereby converting electrical energy into mechanical energy."
            },
            {
                "key": 25,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "Discuss the concept of a black hole in the context of the Universe chapter in physics. Explain the formation, properties, and significance of black holes in the cosmos. How do black holes challenge our understanding of physics and the nature of space and time? Provide examples and scientific evidence to support your explanation.",
                "solution": "Answer Black holes are one of the most intriguing phenomena in the Universe. They are regions in space where gravity is so strong that nothing, not even light, can escape from them. Black holes are formed when massive stars collapse under their own gravity at the end of their life cycle. Properties of black holes include their event horizon, a boundary beyond which nothing can escape, and their singularity, a point of infinite density at the center of a black hole. Black holes play a significant role in the cosmos by influencing the movement of stars and galaxies around them. Black holes challenge our understanding of physics and the nature of space and time by defying the laws of physics as we currently understand them, especially concerning the behavior of matter and light near them. They also bring into question our understanding of the fabric of spacetime and its curvature. Scientific evidence supporting the existence of black holes includes observations of the movement of stars and gases around objects that cannot be seen, as well as the detection of gravitational waves from colliding black holes by LIGO. In conclusion, black holes are mysterious objects that continue to push the boundaries of our knowledge of the Universe and challenge our understanding of fundamental physics concepts."
            },
            {
                "key": 47,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the significance of electric field lines in understanding the distribution of charges in a given space. Use diagrams to support your explanation.",
                "solution": "Electric field lines serve as a visual representation of the direction and strength of the electric field in a given space. By plotting electric field lines, we can gain insight into the distribution of charges in that space. 1. Direction of field The lines always point away from positive charges and towards negative charges, helping us understand the nature of the charges present. 2. Density of lines The density of field lines indicates the strength of the electric field. Where the lines are closer together, the field is stronger, and vice versa. This allows us to compare the relative strength of different regions in the space. 3. No two lines intersect Electric field lines never intersect each other as it would imply multiple directions at the same point which is not possible. This property helps in understanding the unique direction of the electric field at any given point. 4. Overall pattern By observing the overall pattern of electric field lines, we can determine the distribution of charges in the space - whether they are concentrated, dispersed, or evenly distributed. Diagram - Positive charge Electric field lines radiate outwards. - Negative charge Electric field lines converge inwards. - Equal and opposite charges Electric field lines are symmetrically distributed. In conclusion, electric field lines are a valuable tool in understanding the distribution of charges in a given space as they provide a simple yet informative visual representation of electric fields."
            },
            {
                "key": 28,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Sure! Here is a question based on the topic of Magnetism and Matter for the CBSE 10th board at a hard level A coil of 200 turns and resistance 20 ohm is wound in the form of a spiral of 4 turns each of radius 1 cm. A current of 5 A flows through the coil. If the coil is placed in a uniform magnetic field of 0.6 T perpendicular to the plane of the coil, calculate the magnitude and direction of the net force acting on each turn of the coil.",
                "solution": "To calculate the magnitude and direction of the net force acting on each turn of the coil, we can use the formula F BILsin Where F Force B Magnetic field strength 0.6 T I Current 5 A L Length of the coil Angle between the magnetic field and the direction of the current First, calculate the length of the coil Each turn of the coil is a circle with circumference 2r, where r 1 cm 0.01 m Length of 4 turns 4 2 0.01 0.25 m Now, calculate the force on each turn F 0.6 5 0.25 sin90 F 0.75 N The direction of the force will be perpendicular to both the current direction and the magnetic field direction, following the right-hand rule. Therefore, the magnitude of the net force acting on each turn of the coil is 0.75 N, and the direction will be perpendicular to both the current and the magnetic field."
            },
            {
                "key": 1,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain how amplitude modulation AM is used in communication systems to transmit signals over long distances.",
                "solution": "Amplitude Modulation AM is a widely used technique in communication systems to transmit signals over long distances. In AM, the amplitude of the carrier wave is varied in accordance with the instantaneous amplitude of the modulating signal. This modulation process allows the original signal to be carried on the higher frequency carrier wave, enabling it to travel longer distances without losing its quality. In practical terms, in an AM communication system, the audio signal voice, music, etc. is first fed into a modulator which superimposes it on a high-frequency carrier wave. This modulated signal is then transmitted through the communication channel such as a radio antenna. At the receiving end, the signal is demodulated to extract the original audio signal, which can then be amplified and reproduced. The advantage of using AM for long-distance communication lies in its ability to travel long distances by carrying the signal on a higher frequency wave. The modulation and demodulation processes ensure that the original signal is retained faithfully, making AM a suitable choice for broadcasting applications. Overall, through the use of Amplitude Modulation in communication systems, signals can be effectively transmitted over long distances while maintaining good quality and reliability."
            },
            {
                "key": 272,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the basic principle behind the working of a PN junction diode in semiconductor electronics?",
                "solution": "The basic principle behind the working of a PN junction diode in semiconductor electronics is the formation of a depletion region. When a P-type semiconductor material which is positively charged is joined with an N-type semiconductor material which is negatively charged, the free electrons from the N-type material diffuse into the P-type material and combine with the holes positive charge carriers in the P-type material. This leads to the formation of a region near the junction with no free charge carriers, known as the depletion region. Due to this depletion region, a potential barrier is formed, which prevents further flow of charge carriers across the junction. When a forward bias voltage is applied across the PN junction diode, it reduces the width of the depletion region, allowing the flow of current through the diode. On the other hand, when a reverse bias voltage is applied, it widens the depletion region, blocking the flow of current. Thus, the basic principle behind the working of a PN junction diode is the formation of a depletion region due to the combination of P-type and N-type semiconductor materials, which controls the flow of current through the diode based on the bias applied."
            },
            {
                "key": 8,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Define magnetic field. What is the SI unit of magnetic field strength?",
                "solution": "- Magnetic field is a region around a magnet or a current-carrying conductor in which the magnetic force due to the magnet or the current can be experienced. - The SI unit of magnetic field strength is Tesla T."
            },
            {
                "key": 17,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "A positively charged glass rod is brought near a neutral metal sphere. Explain what happens to the charges in the metal sphere and how the charges redistribute themselves. Use the concept of induction to support your explanation.",
                "solution": "When a positively charged glass rod is brought near a neutral metal sphere, the charges in the metal sphere separate due to induction. The positive charges in the metal sphere are attracted to the glass rod, causing an induced negative charge on the side facing the rod and an induced positive charge on the opposite side. This redistribution of charges creates an attractive force between the glass rod and the metal sphere. Overall, the charges in the metal sphere redistribute themselves to create an induced charge separation in response to the presence of the charged glass rod."
            },
            {
                "key": 57,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric potential and how it differs from electric potential energy in the context of electrostatics. Provide an example to illustrate your explanation.",
                "solution": "Electric potential is a scalar quantity that represents the amount of electric potential energy per unit charge at a point in an electric field. It is measured in volts V and is denoted by the symbol 'V'. Electric potential is defined as the work done per unit positive charge to bring it from infinity to a point in an electric field. On the other hand, electric potential energy is the energy stored in a system of charges due to their positions in an electric field. It is a scalar quantity measured in joules J and is denoted by the symbol 'U'. Electric potential energy is the energy a charge possesses by virtue of its position in an electric field. The key difference between electric potential and electric potential energy is that electric potential depends on the location of the point in an electric field, whereas electric potential energy depends on the configuration of charges in the system. Example Consider a positive charge of 1 C placed at a point in an electric field. The electric potential at that point would be the amount of work done per unit charge to bring a positive test charge from infinity to that point. On the other hand, the electric potential energy of the system of charges would be the total energy stored in the configuration of charges due to their positions in the electric field. In summary, electric potential is the potential energy per unit charge at a point in an electric field, while electric potential energy is the total energy stored in a system of charges due to their positions in the field."
            },
            {
                "key": 106,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the difference between static friction and kinetic friction. How does the coefficient of friction come into play in determining the magnitude of each type of frictional force? Provide examples to support your explanation.",
                "solution": "Static friction is the force that resists the relative motion between two surfaces that are not moving past each other. It is present when the object is at rest. Kinetic friction, on the other hand, is the force that opposes the motion of an object when the surfaces are sliding past each other. The coefficient of friction is a constant value that depends on the nature of the surfaces in contact. It plays a crucial role in determining the magnitude of frictional forces. The coefficient of static friction is usually higher than the coefficient of kinetic friction for the same surfaces. For example, consider a book placed on a table. The static friction holds the book in place until a certain force is applied to move it. Once the force exceeds the maximum static friction, the book starts sliding, and kinetic friction comes into play to oppose its motion. Thus, the difference between static and kinetic friction lies in whether the surfaces are stationary or in motion, and the coefficient of friction determines the strength of these frictional forces."
            },
            {
                "key": 54,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "A light wave of wavelength 500 nm is incident on a diffraction grating with 5000 lines per cm. Calculate the number of bright fringes observed in the diffraction pattern when the screen is placed at a distance of 2 meters from the grating. Given that the width of each slit in the grating is 0.1 mm. Use appropriate formulae from wave optics to solve the problem",
                "solution": "To solve this problem, we can use the formula for the number of bright fringes in a diffraction grating nlambda dsintheta Where - n is the order of the fringe - is the wavelength of light 500 nm 500 10-9 m - d is the slit spacing in the grating 1 5000 cm 2 10-4 m - is the angle of diffraction Given that the screen is placed at 2 meters from the grating, we can consider tan yL where y is the distance between the central maxima and nth maxima and L is the distance between grating and screen. We need to calculate the value of n to find the number of bright fringes. Let's start with solving for n n frac2Ldlambda Substitute the values n frac2 times 22 times 10-4 times 500 times 10-9 n frac40.1 times 10-4 n 40 Therefore, the number of bright fringes observed in the diffraction pattern when the screen is placed at a distance of 2 meters from the grating is 40."
            },
            {
                "key": 95,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the name given to the theory that explains the origin of the universe as a rapid expansion from a state of extremely high density and temperature?",
                "solution": "The theory explaining the rapid expansion of the universe from a state of extremely high density and temperature is called the Big Bang Theory."
            },
            {
                "key": 91,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the main function of a transmitter in a communication system?",
                "solution": "The main function of a transmitter in a communication system is to convert the message signal into a form that is suitable for transmission over the communication channel. This involves encoding, modulating, and amplifying the signal before sending it out through the channel to be received by the receiver. The transmitter plays a crucial role in ensuring that the message signal is robustly and accurately transmitted to the intended recipient."
            },
            {
                "key": 264,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "Explain the concept of diffraction and its relevance in wave optics, providing examples to support your explanation.",
                "solution": "Diffraction is the bending of waves around obstacles or through openings. In wave optics, diffraction plays a crucial role in understanding the behavior of light waves when they encounter obstacles or pass through small openings. One of the key concepts of diffraction is Huygens' principle, which states that every point on the wavefront acts as a source of secondary wavelets that spread out in all directions. These secondary wavelets interfere with each other, causing diffraction patterns to form. One example of diffraction is the double-slit experiment, where a beam of light is passed through two closely spaced slits. The light waves diffract as they pass through the slits, creating an interference pattern on a screen placed behind the slits. This pattern demonstrates the wave nature of light and illustrates how diffraction affects the behavior of light waves. Another example is the diffraction grating, which consists of a series of closely spaced slits or lines that diffract light waves. Diffraction gratings are commonly used in spectrometers to separate and analyze different wavelengths of light based on their diffraction patterns. In conclusion, diffraction is a fundamental concept in wave optics that helps explain the behavior of light waves when they encounter obstacles or pass through openings. By studying diffraction patterns and phenomena, we can gain insights into the wave nature of light and further our understanding of optics."
            },
            {
                "key": 115,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "Explain how the concept of dark matter supports the understanding of the structure and evolution of the universe. Provide examples of observational evidence that demonstrate the presence of dark matter in the universe.",
                "solution": "Dark matter is a hypothetical form of matter that does not emit, absorb, or reflect light, making it invisible and detectable only through its gravitational effects. The concept of dark matter is crucial in understanding the structure and evolution of the universe because it helps explain the observed rotational speeds of galaxies, the large-scale distribution of galaxies, and the formation of galaxy clusters. Observational evidence supporting the existence of dark matter includes 1. Galaxy rotation curves The rotational speeds of galaxies are much higher than expected based on the amount of visible matter present. This discrepancy can be explained by the gravitational influence of dark matter. 2. Gravitational lensing Dark matter can bend light passing near it due to its gravitational pull, causing gravitational lensing effects that have been observed in galaxy clusters and around massive objects. 3. Cosmic microwave background radiation Analyses of the cosmic microwave background radiation, the afterglow of the Big Bang, show patterns that are consistent with the existence of dark matter. 4. Large-scale structure of the universe Simulations of the universe's formation and evolution match observations only when dark matter is included in the models. In conclusion, dark matter plays a fundamental role in shaping the universe we observe today, from the distribution of galaxies to the formation of cosmic structures. Its presence is supported by various observational evidence that highlights its significant impact on the structure and evolution of the universe."
            },
            {
                "key": 305,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "In the universe, which element is the most abundant by mass and makes up about 75 of its elemental mass?",
                "solution": "The element hydrogen is the most abundant in the universe, making up about 75 of its elemental mass."
            },
            {
                "key": 7,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Define the term 'electric potential' and explain how it is different from electric potential energy.",
                "solution": "Electric potential is defined as the amount of work done per unit positive charge to bring that charge from infinity to a particular point in an electric field. It is measured in Volts V. Electric potential energy, on the other hand, is the energy stored in a system of charged particles due to their positions in an electric field. It is the work done to bring a charge from infinity to a specific point in the electric field and is measured in Joules J. In summary, electric potential is the amount of work done per unit charge to bring a charge to a point in an electric field, whereas electric potential energy is the energy stored in a system of charged particles due to their positions in an electric field."
            },
            {
                "key": 300,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of radioactive decay and calculate the half-life of a radioactive substance if its decay constant is 0.05 min-1.",
                "solution": "Radioactive decay is the process by which an unstable atomic nucleus loses energy by emitting radiation in the form of alpha, beta, or gamma particles. The decay constant, denoted by , is the probability per unit time that a nucleus will decay. The relationship between decay constant and half-life T12 of a radioactive substance is given by the formula T12 ln2 Given that the decay constant is 0.05 min-1, we can substitute this value into the formula T12 ln2 0.05 13.86 minutes Therefore, the half-life of the radioactive substance is approximately 13.86 minutes."
            },
            {
                "key": 262,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of a p-n junction in a semiconductor diode and discuss the significance of Depletion region in its functioning at a molecular level.",
                "solution": "A p-n junction in a semiconductor diode is formed by joining a p-type semiconductor with an n-type semiconductor. In a p-type semiconductor, electron holes are the majority charge carriers, while in an n-type semiconductor, electrons are the majority charge carriers. When these two types of semiconductors are brought together to form a p-n junction, a depletion region is created at the junction due to diffusion of charge carriers. The significance of the depletion region in the functioning of a semiconductor diode lies in its ability to create a potential barrier that allows for the flow of current in one direction while blocking it in the opposite direction. At a molecular level, when the p-n junction is forward biased i.e., the p-side is connected to the positive terminal of the battery and the n-side is connected to the negative terminal, the depletion region becomes narrower, allowing the majority charge carriers to move across the junction and current to flow. On the other hand, when the p-n junction is reverse biased i.e., the p-side is connected to the negative terminal of the battery and the n-side is connected to the positive terminal, the depletion region becomes wider, preventing the flow of current due to the repulsion between the majority charge carriers and the applied external voltage. Overall, the creation and manipulation of the depletion region in a p-n junction play a crucial role in controlling the flow of current in a semiconductor diode, making it a key component in various electronic devices and circuits."
            },
            {
                "key": 39,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "State the right-hand rule to determine the direction of magnetic field lines around a current-carrying conductor.",
                "solution": "To determine the direction of magnetic field lines around a current-carrying conductor, we can use the right-hand rule. 1. Hold the conductor in your right hand with your thumb pointing in the direction of the current conventional current flow, from positive to negative. 2. Curl your fingers around the conductor. The direction in which your fingers curl represents the direction of the magnetic field lines around the conductor. So, by using this right-hand rule, you can easily determine the direction of magnetic field lines around a current-carrying conductor."
            },
            {
                "key": 117,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "Explain how the concept of electric field differs from electric potential, and discuss how they are related to each other in the context of electrostatics. Use relevant mathematical equations and illustrations to support your answer at the molecular level.",
                "solution": "- Electric field refers to the force experienced by a positive test charge at a point in space due to the presence of other charges. It is a vector quantity denoted by E. The equation for electric field E at a point is given by E Fq, where F is the force on the test charge and q is the magnitude of the test charge. - Electric potential, on the other hand, is the amount of work needed to move a unit positive charge from infinity to a point against the electric field. It is a scalar quantity denoted by V. The equation for electric potential V at a point is given by V kqr, where k is the Coulomb constant, q is the charge creating the field, and r is the distance from the charge. - The electric field and electric potential are related through the equation E -dVdr, where dVdr is the negative gradient of the electric potential V with respect to distance r. This means that the electric field points in the direction of decreasing potential. - At the molecular level, electric field can be thought of as the force experienced by a positive charge due to the presence of negative charges in the vicinity. Electric potential, on the other hand, can be visualized as the energy stored in interactions between charges. - In electrostatics, the electric field and electric potential play complementary roles in describing the behavior of charges in a system. The electric field provides information about the force acting on charges, while the electric potential describes the energy associated with those charges."
            },
            {
                "key": 183,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Explain what is meant by the term total internal reflection in the context of ray optics and provide an example of a real-life application where total internal reflection is utilized.",
                "solution": "Total internal reflection occurs when a ray of light traveling from a denser medium to a rarer medium strikes the boundary at an angle greater than the critical angle. In this case, all of the light is reflected back into the denser medium and none of it is refracted into the rarer medium. One real-life application of total internal reflection is in optical fibers. Optical fibers are used for transmitting data through light pulses. The core of the optical fiber is made of a denser material surrounded by a rarer material. When light enters the optical fiber at a certain angle greater than the critical angle, it undergoes total internal reflection and continues to travel down the fiber without losing much intensity, allowing for efficient transmission of data over long distances. This phenomenon of total internal reflection is crucial in ensuring minimal loss of signal and high-speed data transmission in optical communication systems."
            },
            {
                "key": 114,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "Explain how the phenomenon of interference relates to the concept of wave-particle duality in the context of Young's double slit experiment. Include relevant equations and principles to support your answer.",
                "solution": "In Young's double slit experiment, interference occurs when two coherent waves from two slits overlap and interact with each other. This interference pattern is a result of the wave nature of light. However, when we consider the concept of wave-particle duality, we need to understand that light also exhibits particle-like behavior. The interference pattern in Young's double slit experiment can be explained using the principle of superposition of waves. The total intensity at a point on the screen is determined by the superposition of the electric fields of the individual waves. Mathematically, this can be described by the equation I I1 I2 2sqrtI1I2 cosphi where I is the total intensity, I1 and I2 are the intensities of the individual waves, and phi is the phase difference between the waves. The phenomenon of interference in Young's double slit experiment highlights the wave-like nature of light, as it demonstrates how light waves can interfere constructively and destructively. This interference pattern provides evidence for the wave nature of light. On the other hand, the particle-like behavior of light is demonstrated by the fact that individual photons are detected as discrete particles at the screen in the experiment. This duality of light as both waves and particles is a fundamental concept in quantum mechanics. In conclusion, the phenomenon of interference in Young's double slit experiment highlights the wave nature of light, while the concept of wave-particle duality acknowledges that light can also exhibit particle-like behavior. This duality challenges our classical understanding of light and is a cornerstone of quantum physics."
            },
            {
                "key": 40,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the atomic number of an element and how does it define the identity of an atom in the periodic table? Provide an example to explain.",
                "solution": "The atomic number of an element is the number of protons present in the nucleus of an atom. It defines the identity of an atom in the periodic table because each element has a unique atomic number. For example, hydrogen has an atomic number of 1, which means it has one proton in its nucleus. This unique number of protons distinguishes hydrogen from all other elements in the periodic table. Each element is arranged in increasing order of atomic number in the periodic table, allowing us to easily identify and classify elements based on their atomic number."
            },
            {
                "key": 75,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain how the theory of the Big Bang supports the idea of the expansion of the universe according to the chapter on the Universe in Biology.",
                "solution": "The theory of the Big Bang states that the universe originated from a singular point and has been expanding ever since. This expansion is supported by evidence such as the redshift of galaxies, which indicates that galaxies are moving away from each other. This supports the idea of the continuous expansion of the universe as proposed by the theory of the Big Bang."
            },
            {
                "key": 134,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain the concept of interference of light waves and how it is used to explain the formation of interference fringes in the Young's double-slit experiment. Use relevant diagrams to support your explanation.",
                "solution": "Interference of light waves occurs when two or more waves superpose on each other, resulting in the redistribution of energy. In the Young's double-slit experiment, light from a single source passes through two closely spaced slits and then interferes on a screen. This interference results in the formation of alternating bright and dark fringes on the screen. Bright fringes are formed when the crest of one wave overlaps with the crest of the other wave, leading to constructive interference. Dark fringes are formed when the crest of one wave overlaps with the trough of the other wave, leading to destructive interference. The distance between adjacent bright fringes or dark fringes is determined by the wavelength of light used and the distance between the slits. The interference pattern formed in the experiment can be explained by considering that light behaves as a wave, and the waves interfere with each other as they pass through the slits. The interference fringes are a result of the superposition of the waves, leading to regions of constructive and destructive interference. This phenomenon is crucial for understanding the wave nature of light and has applications in various fields such as optics, astronomy, and microscopy."
            },
            {
                "key": 15,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Big Bang Theory and its significance in understanding the origin and evolution of the universe.",
                "solution": "The Big Bang Theory is the prevailing cosmological model for the observable universe from the earliest known periods through its subsequent large-scale evolution. According to this theory, the universe began as an incredibly hot and dense point, which expanded rapidly about 13.8 billion years ago. This expansion resulted in the formation of all the matter and energy we see today. The significance of the Big Bang Theory lies in its ability to explain the origin and evolution of the universe. It helps us understand how the universe developed from a singular point into the vast and diverse cosmos we see today. By studying the remnants of the Big Bang, such as the cosmic microwave background radiation, scientists have been able to piece together the history of the universe and uncover valuable insights into its composition, structure, and future evolution. Overall, the Big Bang Theory has revolutionized our understanding of the universe and continues to shape our exploration of the cosmos, providing a framework for further scientific discoveries and advancements in the field of cosmology."
            },
            {
                "key": 70,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the primary difference between atomic nucleus and electron cloud in an atom?",
                "solution": "The primary difference between the atomic nucleus and the electron cloud in an atom is their location within the atom. Atomic nucleus - The atomic nucleus is located at the center of an atom. - It is composed of protons and neutrons. - The nucleus has a positive charge. Electron cloud - The electron cloud surrounds the atomic nucleus. - It is made up of electrons. - The electron cloud has a negative charge. In summary, the atomic nucleus is located at the center of an atom and contains protons and neutrons with a positive charge, while the electron cloud surrounds the nucleus and consists of electrons with a negative charge."
            },
            {
                "key": 10,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "State one similarity and one difference between the structure of an atom and the structure of a nucleus.",
                "solution": "Similarity Both the atom and the nucleus contain subatomic particles. The atom consists of protons, neutrons, and electrons, while the nucleus consists of only protons and neutrons. Difference The main difference between the structure of an atom and the structure of a nucleus is that the nucleus is located at the center of the atom, while the electrons orbit around the nucleus in specific energy levels or shells."
            },
            {
                "key": 302,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the purpose of doping in semiconductor materials?",
                "solution": "Doping is the process of intentionally introducing impurities into a semiconductor material to alter its electrical properties. In semiconductor electronics, doping is used to either increase the number of free charge carriers n-type doping or create a deficiency of charge carriers p-type doping within the material. N-type doping involves adding elements like phosphorus or arsenic, which have an extra electron in their outer shell, creating an excess of electrons in the material. This increases the material's conductivity by allowing more current to flow. P-type doping involves adding elements like boron or gallium, which have one less electron in their outer shell, creating holes in the crystal lattice where electrons can move. This decreases the material's conductivity by restricting the flow of current. Overall, the purpose of doping in semiconductor materials is to control and manipulate their electrical conductivity and create the desired electronic devices, such as diodes and transistors, used in modern electronics."
            },
            {
                "key": 5,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the term used to describe the theory that the universe was once extremely hot and dense, and has been expanding ever since?",
                "solution": "The term used to describe the theory that the universe was once extremely hot and dense, and has been expanding ever since is the Big Bang Theory."
            },
            {
                "key": 36,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "What is the difference between static friction and kinetic friction? Give an example of each type of friction.",
                "solution": "Difference between static friction and kinetic friction Static friction - Static friction occurs when there is no relative motion between the surfaces in contact. - It acts to prevent the initial movement of an object. - The magnitude of static friction is equal to the force applied up to a certain limit. - Example A book resting on a table experiences static friction that keeps it in place until an additional force is applied to move it. Kinetic friction - Kinetic friction occurs when there is relative motion between the surfaces in contact. - It acts to oppose the motion of an object. - The magnitude of kinetic friction is usually less than static friction. - Example A box sliding across the floor experiences kinetic friction that opposes its motion and slows it down. In summary, static friction prevents the initial movement of an object while kinetic friction opposes the motion of an object that is already moving."
            },
            {
                "key": 68,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "State the difference between ferromagnetic, paramagnetic, and diamagnetic substances in terms of their response to an external magnetic field.",
                "solution": "Ferromagnetic substances Ferromagnetic substances are strongly attracted to external magnetic fields and can retain their magnetization even after the external magnetic field is removed. Paramagnetic substances Paramagnetic substances are weakly attracted to external magnetic fields and their magnetic properties disappear once the external magnetic field is removed. Diamagnetic substances Diamagnetic substances are weakly repelled by external magnetic fields and the magnetic properties cease to exist once the external magnetic field is removed."
            },
            {
                "key": 89,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain how the motion of a charged particle changes when it enters a magnetic field at an angle other than 90 degrees. Include in your explanation the factors that affect the magnitude and direction of the force experienced by the charged particle.",
                "solution": "When a charged particle enters a magnetic field at an angle other than 90 degrees, its motion changes due to the Lorentz force acting on it. The magnitude and direction of this force depend on the velocity of the particle, the strength of the magnetic field, and the angle at which the particle enters the field. The force experienced by the charged particle can be determined by the formula F qvBsintheta, where - F is the magnetic force, - q is the charge of the particle, - v is the velocity of the particle, - B is the magnetic field strength, - is the angle between the velocity vector and the magnetic field vector. If the charged particle enters the magnetic field at an angle other than 90 degrees, the force experienced will have both a perpendicular and a parallel component to the velocity vector. This causes the particle to move in a curved path rather than a straight line as it would if it entered the field at 90 degrees. The magnitude of the force experienced by the charged particle depends on the velocity of the particle and the strength of the magnetic field. The direction of the force is determined by the right-hand rule, where the thumb represents the direction of the velocity vector, the index finger represents the direction of the magnetic field vector, and the middle finger indicates the direction of the force. In conclusion, when a charged particle enters a magnetic field at an angle other than 90 degrees, it experiences a force that causes it to move in a curved path. The magnitude and direction of this force depend on the velocity of the particle, the strength of the magnetic field, and the angle at which the particle enters the field."
            },
            {
                "key": 43,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain how the phenomenon of refraction of light is utilized in the formation of an image by a convex lens. Provide an example and draw a ray diagram to support your explanation.",
                "solution": "Refraction of light is used in the formation of an image by a convex lens through the process of lens refraction. When light rays pass through a convex lens, they bend towards the principal axis due to a change in the medium's optical density. This bending leads to the convergence of light rays to form an image. For example, consider an object placed beyond the 2F point of a convex lens. The light rays coming from the object bend at different angles as they pass through the lens and converge at a point on the opposite side of the lens, forming an inverted real image. This image can be captured on a screen or observed directly. Ray Diagram - Draw a convex lens with its principal axis marked. - Draw an object placed beyond the 2F point on one side of the lens. - Draw two parallel incident rays from the object, one passing through the optical center and the other through the focal point. - The refracted rays converge on the other side of the lens to form the image. Through the phenomenon of refraction, convex lenses enable the formation of images that can be utilized in various optical devices like cameras, telescopes, and microscopes."
            },
            {
                "key": 73,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of total internal reflection in the context of ray optics, and provide an example of where this phenomenon is observed in everyday life.",
                "solution": "Total internal reflection is a phenomenon that occurs when a light ray traveling from a denser medium to a rarer medium is reflected back into the denser medium. This happens when the angle of incidence is greater than the critical angle for the two mediums involved. The critical angle is the angle of incidence that results in an angle of refraction of 90 degrees. One common example of total internal reflection in everyday life is the phenomenon of mirages. Mirages occur in hot deserts when the ground is significantly hotter than the air above it. The hot ground causes the air close to the ground to be much warmer and less dense than the cooler air above it. When light rays from the sky enter the hot, less dense air near the ground at an angle greater than the critical angle, they undergo total internal reflection. This causes the observer to perceive a visual illusion of water on the ground, which is actually a reflection of the sky. In conclusion, total internal reflection is a fascinating optical phenomenon that can be observed in various real-life situations, such as mirages in deserts."
            },
            {
                "key": 34,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon of interference of light waves and how does it contribute to the formation of interference fringes in Young's double-slit experiment?",
                "solution": "Interference of light waves is a phenomenon where two or more waves superimpose to form a resultant wave of greater, lower, or the same amplitude. In Young's double-slit experiment, light waves from two coherent sources pass through two closely spaced slits and overlap on a screen. When the light waves meet, they form regions of constructive interference where crest aligns with crest and trough aligns with trough, leading to bright fringes and regions of destructive interference where crest aligns with trough, leading to dark fringes. This creates a pattern of alternating bright and dark fringes on the screen, known as interference fringes. The spacing between these fringes is determined by the wavelength of light, the distance between the slits, and the distance from the slits to the screen. In conclusion, the interference of light waves in Young's double-slit experiment leads to the formation of interference fringes by the superposition of waves resulting in constructive and destructive interference patterns."
            },
            {
                "key": 123,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "In the context of Ray Optics, define the term 'refraction' and explain how it is related to the bending of light rays when they pass from one medium to another.",
                "solution": "Refraction is the bending of light rays when they pass from one medium to another. This bending occurs due to the change in speed of light as it travels from one medium to another, causing the light ray to change its direction. The change in speed is a result of the change in optical density of the two mediums, which causes the light to bend towards the normal if it slows down, or away from the normal if it speeds up."
            },
            {
                "key": 65,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the Big Bang theory and how does it explain the origin and expansion of the universe?",
                "solution": "The Big Bang theory is a widely accepted explanation for the origin and expansion of the universe. According to this theory, the universe began as a singularity - a point of infinite density and temperature. Approximately 13.8 billion years ago, this singularity rapidly expanded and cooled down, leading to the formation of matter, energy, and the universe as we know it today. The Big Bang theory explains the origin of the universe by stating that all matter and energy were concentrated at a single point before the explosion. The rapid expansion that followed led to the formation of galaxies, stars, and planets over billions of years. Furthermore, the theory also explains the ongoing expansion of the universe. Scientists have observed that galaxies are moving away from each other, indicating that the universe is continuously expanding. This expansion is a key aspect of the Big Bang theory and is supported by various pieces of observational evidence. In conclusion, the Big Bang theory provides a comprehensive explanation for the origin and expansion of the universe, offering insights into the fundamental processes that have shaped our cosmos."
            },
            {
                "key": 33,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of total internal reflection with a diagram and provide an example of where total internal reflection is used in everyday life.",
                "solution": "Total internal reflection is a phenomenon that occurs when a ray of light traveling from a denser medium to a rarer medium is reflected back into the denser medium, instead of refracting out. This happens when the angle of incidence is greater than the critical angle. Diagram for total internal reflection An everyday example of total internal reflection is the use of optical fibers in telecommunications. Optical fibers are thin, transparent fibers made of glass or plastic that can transmit light signals over long distances. The light signals are constantly reflected within the fiber due to total internal reflection, allowing the signal to travel without much loss of intensity. This technology is commonly used in internet connections, telephone lines, and cable television."
            },
            {
                "key": 22,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the working principle of a P-N junction diode in detail, including the formation of depletion region and barrier potential. How does the forward and reverse biasing affect the flow of current through the diode? Provide relevant diagrams to support your explanation.",
                "solution": "Working Principle of P-N Junction Diode - A P-N junction diode consists of a P-region and an N-region connected together, forming a depletion region at the junction. - When a P-N junction diode is formed, majority charge carriers holes in P-region and electrons in N-region diffuse across the junction, resulting in the formation of a depletion region. - The depletion region is an electrically neutral region depleted of majority charge carriers, with an electric field setup due to uncovered positive and negative charges on either side of the junction. - This electric field acts as a barrier potential, preventing further flow of majority charge carriers across the junction. Forward Biasing - In forward biasing, a positive voltage is applied to the P-region and a negative voltage to the N-region. - This decreases the width of the depletion region, reducing the barrier potential. - Majority charge carriers can easily flow across the junction, resulting in a significant current flow through the diode. Reverse Biasing - In reverse biasing, a negative voltage is applied to the P-region and a positive voltage to the N-region. - This widens the depletion region, increasing the barrier potential. - Majority charge carriers are unable to flow across the junction, resulting in minimal current flow through the diode. Diagrams - Below are the simplified diagrams illustrating the formation of a P-N junction diode, depletion region, and the effect of forward and reverse biasing on current flow. !P-N Junction Diodehttpswww.electronics-tutorials.wswp-contentuploads201805invsw-dc01.png - Formation of P-N junction diode and depletion region. !Forward Biasinghttpswww.electronics-tutorials.wswp-contentuploads201805invsw-dc03l.png - Effect of forward biasing on current flow. !Reverse Biasinghttpswww.electronics-tutorials.wswp-contentuploads201805invsw-dc04l.png - Effect of reverse biasing on current flow. This explanation provides a generic and concise overview of the working principle of a P-N junction diode, including formation of depletion region, barrier potential, and the impact of forward and reverse biasing on current flow."
            },
            {
                "key": 30,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the process of nuclear fusion and nuclear fission, highlighting the differences between the two processes and their significance in the production of energy. Mention some practical applications of nuclear fusion and nuclear fission in the field of energy production and nuclear weapons.",
                "solution": "Nuclear fusion and nuclear fission are two nuclear processes with significant differences and applications in energy production and weaponry. Nuclear Fusion - Nuclear fusion is a process where two light atomic nuclei combine to form a heavier nucleus, releasing a large amount of energy in the process. - It is the process that powers the sun and other stars, by converting hydrogen into helium. - In nuclear fusion, the mass of the final nucleus is slightly less than the combined mass of the original nuclei, leading to the release of energy as per Einstein's equation Emc2. - Fusion reaction requires extremely high temperatures and pressures to overcome the repulsive forces between positively charged nuclei. It is difficult to sustain on Earth due to these conditions. - Practical applications of nuclear fusion include potentially limitless and clean energy production, with minimal radioactive waste. Nuclear Fission - Nuclear fission is the splitting of a heavy atomic nucleus into two or more lighter nuclei, along with the release of energy. - It is used in nuclear power plants to generate electricity by splitting uranium or plutonium nuclei. - Fission reactions are sustained by controlling the rate of nuclear reactions to prevent runaway chain reactions. - Nuclear fission produces radioactive waste that requires proper disposal and poses risks to the environment and human health. Significance and Applications - Nuclear fusion offers the potential for clean and abundant energy production, with fuel sources like deuterium and tritium being plentiful in seawater. - Nuclear fission is currently utilized in nuclear power plants to generate electricity, providing significant power output and reducing reliance on fossil fuels. - Both processes are also used in the development of nuclear weapons, where fission and fusion reactions release massive amounts of destructive energy. In conclusion, while nuclear fusion holds promise for sustainable energy production, nuclear fission remains a crucial component of current energy generation and military applications."
            },
            {
                "key": 48,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the term 'diamagnetic substance' and give an example. How does a diamagnetic substance behave when placed in an external magnetic field? Also, discuss the factors affecting the magnetic properties of a material.",
                "solution": "Diamagnetic substances are those substances which do not have any permanent magnetic dipole moment. When placed in an external magnetic field, diamagnetic substances get weakly repelled by the field. An example of a diamagnetic substance is bismuth. The magnetic properties of a material are influenced by factors such as the arrangement of atoms or ions in the material, the presence of unpaired electrons, and the external magnetic field applied to the material. Materials with paired electrons exhibit diamagnetic properties, while materials with unpaired electrons exhibit paramagnetic or ferromagnetic properties based on the number of unpaired electrons."
            },
            {
                "key": 90,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fusion and nuclear fission. Compare and contrast the two processes in terms of the reaction mechanism, energy released, and their applications in nuclear power generation. Provide examples to support your answer.",
                "solution": "Nuclear Fusion - Nuclear fusion is a process in which two or more atomic nuclei come together to form a heavier nucleus. - It is the process that powers the sun and other stars. - In nuclear fusion, a large amount of energy is released due to the conversion of mass into energy, following Einstein's famous equation, Emc2. Nuclear Fission - Nuclear fission is the process in which a heavy nucleus splits into two or more lighter nuclei. - This process is used in nuclear power plants to generate electricity. - Nuclear fission also releases a significant amount of energy, which is harnessed for power generation. Comparison - Reaction Mechanism Nuclear fusion involves the merging of atomic nuclei, whereas nuclear fission involves the splitting of atomic nuclei. - Energy Released Both processes release a substantial amount of energy, but nuclear fusion releases more energy per reaction compared to nuclear fission. - Applications in Nuclear Power Generation Nuclear fission is currently utilized in nuclear power plants for electricity generation, whereas nuclear fusion is still in the experimental stage for power generation. Examples - Nuclear Fusion The fusion of hydrogen isotopes deuterium and tritium to form helium in the sun. - Nuclear Fission The splitting of uranium-235 nuclei in nuclear reactors to release energy for electricity production. In conclusion, nuclear fusion and nuclear fission are two important processes that involve the release of energy from atomic nuclei. While both have their unique characteristics and applications, nuclear fusion has the potential to be a cleaner and more efficient source of power in the future."
            },
            {
                "key": 325,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "What role do chemical reactions play in the formation and evolution of celestial bodies within the universe? Provide specific examples to support your explanation.",
                "solution": "Chemical reactions are fundamental in shaping celestial bodies in the universe. For instance, the formation of stars involves nuclear fusion reactions that convert hydrogen into helium, releasing massive amounts of energy. Additionally, the presence of water and organic molecules in comets and asteroids indicate chemical reactions that occurred in the early solar system. Moreover, the process of planet formation involves various chemical reactions, such as condensation and accretion of materials to form planets. Overall, chemical reactions are crucial in driving the evolution and composition of celestial bodies in the universe."
            },
            {
                "key": 98,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Define the term 'magnetic field lines'. How are these lines useful in representing the magnetic field around a magnet?",
                "solution": "Magnetic field lines are imaginary lines that represent the direction and strength of the magnetic field around a magnet. These lines form closed loops that emerge from the north pole and enter the south pole of a magnet. Magnetic field lines are useful in representing the magnetic field around a magnet as they provide a visual representation of the magnitude and direction of the magnetic field. By observing the pattern of these lines, one can easily determine the path a magnetic object would take when placed in the magnetic field of a magnet. In summary, magnetic field lines help in visualizing and understanding the magnetic field around a magnet by providing a clear representation of its strength and direction."
            },
            {
                "key": 207,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "In an experiment, a small metallic sphere A is placed at the center of a larger hollow metallic sphere B. Both spheres are initially uncharged. Sphere A is given a positive charge, causing sphere B to also become charged. Explain the process of charge distribution on both spheres and calculate the potential difference between sphere A and sphere B.",
                "solution": "1. Initially, both spheres A and B are uncharged. 2. When sphere A is given a positive charge, electrons in sphere A repel to the outer surface of sphere A. 3. Due to the repulsion, electrons on sphere B redistribute to the outer surface of sphere B. 4. Sphere A becomes positively charged, while sphere B becomes negatively charged due to the redistribution of electrons. 5. This redistribution of charge on both spheres results in an induced opposite charge on each sphere. 6. The potential difference between sphere A and sphere B can be calculated using the formula V k Q1 r1 - Q2 r2 where V is the potential difference, k is the Coulomb constant, Q1 and Q2 are the charges on the spheres, and r1 and r2 are the radii of the spheres. 7. Substituting the values of charges and radii, we can calculate the potential difference between sphere A and sphere B. This explanation demonstrates the process of charge distribution on the metallic spheres and provides a method to calculate the potential difference between them."
            },
            {
                "key": 316,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "When two surfaces are in contact and a force is applied parallel to the contact surface in a direction opposite to the impending motion, what type of friction is being overcome? How is this type of friction different from static friction? Give an example to illustrate your answer.",
                "solution": "The type of friction being overcome when a force is applied parallel to the contact surface in a direction opposite to the impending motion is kinetic friction. Kinetic friction is different from static friction in that kinetic friction occurs between surfaces in motion, while static friction occurs between surfaces at rest. Example A book sliding on a table is experiencing kinetic friction as the force applied opposes the motion of the book on the table. This is different from static friction, where the book would remain at rest until a force greater than static friction is applied to overcome it, such as when pushing a heavy box across the floor."
            },
            {
                "key": 78,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain how the Earth's magnetic field is generated and its significance in protecting our planet from harmful solar radiation.",
                "solution": "According to the dynamo theory, the Earth's magnetic field is generated by the movement of molten iron and nickel in the outer core of the Earth. As these materials move, they create electric currents which in turn generate a magnetic field around the planet. The Earth's magnetic field plays a crucial role in protecting our planet from harmful solar radiation. This magnetic field acts as a shield, deflecting most of the charged particles and solar winds that come from the Sun. Without this protective magnetic field, these harmful particles would strip away our atmosphere, making it impossible for life to exist on Earth. In conclusion, the Earth's magnetic field is generated by the movement of molten metals in the Earth's core and its significance lies in protecting our planet from harmful solar radiation, thus safeguarding life."
            },
            {
                "key": 69,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the concept of electromagnetic induction and give an example to illustrate its application in everyday life.",
                "solution": "Electromagnetic induction is the phenomenon of producing an electromotive force emf or voltage in a conductor due to a change in the magnetic field around it. This principle is the basis for the functioning of electric generators and transformers. An example to illustrate electromagnetic induction in everyday life is the operation of a bicycle dynamo. When the bicycle is in motion, the dynamo spins along with the wheel, causing a change in the magnetic field around the coil inside the dynamo. This change induces an electric current in the coil, which is then used to power the lights attached to the bicycle. So, in simple terms, electromagnetic induction is the process of generating electricity by moving a conductor in a magnetic field."
            },
            {
                "key": 62,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Define semiconductors and explain why they are considered the foundation of modern electronics. Give two examples of commonly used semiconductor devices in everyday gadgets.",
                "solution": "Semiconductors are materials that have conductivity between that of conductors and insulators. They are considered the foundation of modern electronics due to their ability to selectively allow the flow of electric current. This property is essential for creating transistors, which are the building blocks of electronic devices. Two commonly used semiconductor devices in everyday gadgets are 1. Diodes They allow current to flow in one direction only, commonly used in power supplies and LED lights. 2. Transistors They act as amplifiers and switches in electronic circuits, essential for controlling the flow of current in devices such as smartphones and computers."
            },
            {
                "key": 19,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain Faraday's Law of Electromagnetic Induction and give an example to demonstrate its application in everyday life.",
                "solution": "Faraday's Law of Electromagnetic Induction states that a change in magnetic field around a conductor induces an electromotive force emf in the conductor. This emf results in the generation of an electric current in the conductor. An example demonstrating Faraday's Law in everyday life is the operation of a generator. When a coil of wire rotates in a magnetic field, the magnetic flux through the coil changes, inducing an emf according to Faraday's Law. This induced emf generates an electric current in the coil, which can then be used to power various devices. In conclusion, Faraday's Law of Electromagnetic Induction plays a crucial role in the generation of electricity through processes such as generator operation, showcasing its practical applicability in our daily lives."
            },
            {
                "key": 21,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the difference between analog and digital communication systems using relevant examples to highlight their advantages and limitations in the context of modern telecommunications technology.",
                "solution": "Analog communication systems transmit data or information in the form of continuous signals, while digital communication systems transmit data as discrete signals. Advantages of Analog Communication 1. Can transmit a continuous range of values which makes it suitable for audio signals. 2. Simple and cheaper in terms of implementation. Limitations of Analog Communication 1. Signal degradation and noise interference is a major issue. 2. Susceptible to distortion over long distances. Advantages of Digital Communication 1. Can transmit data more accurately with error detection and correction codes. 2. Better quality of signal transmission over long distances. Limitations of Digital Communication 1. More complex and expensive in terms of equipment and infrastructure. 2. Limited signal quality for certain types of data such as audio and video. In the context of modern telecommunications technology, digital communication systems are preferred due to their ability to transmit data more reliably and accurately, making them suitable for various multimedia applications. However, analog communication systems are still used in certain applications such as traditional phone lines where continuous signals are sufficient for communication."
            },
            {
                "key": 53,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "Explain the phenomena of Total Internal Reflection in the context of Ray Optics, and provide a real-life example where this phenomenon is utilized.",
                "solution": "Total Internal Reflection is a phenomenon in Ray Optics where light moving from a denser medium to a rarer medium is completely reflected back into the denser medium if the angle of incidence is greater than the critical angle. This occurs due to the light being unable to pass through the boundary due to the higher refractive index of the denser medium. A real-life example of Total Internal Reflection is the working principle of optical fibers used in telecommunications. When light signals travel through the fiber optic cable, they hit the boundary of the fiber core at an angle greater than the critical angle, leading to total internal reflection. This allows the light signals to be transmitted through the cable with minimal loss and distortion, enabling high-speed data transmission over long distances."
            },
            {
                "key": 45,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain how the formation of chemical elements in stars is essential for the existence of life on Earth. Include relevant concepts such as nuclear fusion, supernovae, and the creation of heavy elements in your answer.",
                "solution": "The formation of chemical elements in stars is essential for the existence of life on Earth because stars play a crucial role in the process of nucleosynthesis. During nuclear fusion in the core of a star, lighter elements like hydrogen and helium fuse together to form heavier elements like carbon, oxygen, and nitrogen. These heavier elements are essential building blocks for life as they form the basis of organic molecules necessary for living organisms. Supernovae, which are exploding stars, play a vital role in the creation of heavy elements like gold, platinum, and uranium. These elements are crucial for the formation of planets like Earth and are essential components of living organisms. In summary, without the formation of chemical elements in stars through processes like nuclear fusion and supernovae explosions, the existence of life on Earth would not be possible."
            },
            {
                "key": 126,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Define static friction and kinetic friction. Give an example of each type of friction in everyday life.",
                "solution": "Static Friction Static friction is the force that prevents an object from moving when a force is applied to it. It acts in the opposite direction of the applied force but does not allow the object to start moving. Example An example of static friction in everyday life is trying to push a heavy box across the floor. Initially, the box does not move despite applying force because of static friction. Kinetic Friction Kinetic friction is the force that opposes the motion of an object that is already moving. It acts in the opposite direction of the object's motion. Example An example of kinetic friction in everyday life is the friction between the tires of a car and the road surface while driving. It helps in stopping the car when the brakes are applied. I hope this helps!"
            },
            {
                "key": 197,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "In an Electrostatics experiment, a small metal sphere with a charge of 3C is brought into contact with a larger metal sphere with a charge of -6C. After contact, the two spheres are separated. Calculate the final charges on each sphere and explain the reasoning behind your answer.",
                "solution": "Initially, the smaller sphere with a charge 3C and the larger sphere with a charge -6C are brought into contact. When the spheres are in contact, charges flow from the larger sphere to the smaller sphere to attain equilibrium. Since the total charge is conserved, the final charge on the smaller sphere would be the sum of the initial charges of both spheres, i.e., 3C - 6C -3C. The charge on the larger sphere would be the difference of the initial charges, i.e., 3C -6C -3C. Therefore, after separation, the smaller sphere would have a charge of -3C and the larger sphere would also have a charge of -3C. Explanation When two objects with different charges are brought into contact, charge transfer occurs until the charges are equalized. The final charges on the spheres are determined by the principles of charge conservation and redistribution during contact."
            },
            {
                "key": 130,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the total number of protons and neutrons present in the nucleus of an atom with atomic number 20 and mass number 40?",
                "solution": "The atomic number of an element represents the number of protons present in its nucleus. In this case, the atom has an atomic number of 20, which means it contains 20 protons. The mass number of an element represents the total number of protons and neutrons present in its nucleus. For the atom with a mass number of 40, and 20 protons as given by the atomic number, we can calculate the number of neutrons by subtracting the atomic number from the mass number. Neutrons Mass number - Atomic number Neutrons 40 - 20 Neutrons 20 Therefore, the atom with atomic number 20 and mass number 40 contains 20 protons and 20 neutrons in its nucleus."
            },
            {
                "key": 100,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Define the term 'atomic mass unit amu' and explain its significance in the context of measuring atomic masses.",
                "solution": "Atomic mass unit amu is defined as a unit of mass used to express atomic and molecular weights. It is equal to 112th of the mass of an atom of carbon-12 isotope. The significance of atomic mass unit amu in measuring atomic masses lies in its convenience and accuracy. Since atomic masses are very small and difficult to compare directly in grams, using amu as a unit simplifies the calculations. By defining the atomic mass unit based on the carbon-12 isotope, which has a mass close to 12 amu, scientists have established a reference point for measuring the masses of other elements more accurately. This allows for easy comparison and calculation of atomic masses in a standardized manner."
            },
            {
                "key": 18,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of magnetic field lines and how they are used to represent the magnetic field around a bar magnet. Also, describe the behavior of a magnetic compass when placed near a bar magnet.",
                "solution": "Magnetic field lines are imaginary lines used to represent the direction and strength of a magnetic field. In the case of a bar magnet, the field lines emerge from the north pole and converge at the south pole in a continuous loop. These lines help visualize the flow of the magnetic field around the magnet. When a magnetic compass is placed near a bar magnet, it aligns itself along the direction of the magnetic field lines. The north-seeking pole of the compass points towards the south pole of the magnet, indicating the direction of the magnetic field. This behavior demonstrates that magnets have a surrounding magnetic field that influences the movement of other magnetic materials like the compass needle."
            },
            {
                "key": 51,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain with the help of diagrams how amplitude modulation is achieved in communication systems. Additionally, discuss the advantages and disadvantages of amplitude modulation compared to frequency modulation.",
                "solution": "To explain how amplitude modulation is achieved in communication systems, you can start by drawing a diagram showing a carrier wave high-frequency wave and a modulating signal low-frequency wave. The carrier wave's amplitude is varied in proportion to the instantaneous amplitude of the modulating signal. This results in the creation of an amplitude modulated wave that carries the information in the modulating signal. Advantages of amplitude modulation over frequency modulation include 1. Easy to implement and cost-effective. 2. The receiver can easily detect and demodulate the modulated signal. 3. AM signals have better efficiency in terms of power consumption. Disadvantages of amplitude modulation compared to frequency modulation are 1. Prone to interference and noise. 2. Limited frequency response which affects the quality of the signal. 3. Less immune to fading and disturbances. This explanation should cover the key points required for the question at a high school level."
            },
            {
                "key": 26,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain with mathematical reasoning why frictional force is independent of the apparent area of contact between two surfaces in the context of motion.",
                "solution": "Frictional force is independent of the apparent area of contact between two surfaces in the context of motion because friction depends on the nature of surfaces and the force pressing the surfaces together normal force, but not on the area of contact. Mathematically, the frictional force F can be represented by the equation F N Where F is the frictional force, is the coefficient of friction, and N is the normal force. From the equation, it is evident that the frictional force F is directly proportional to the normal force N and the coefficient of friction , but it is independent of the apparent area of contact. Therefore, regardless of the contact area, as long as the nature of the surfaces and the normal force remain the same, the frictional force will also remain constant."
            },
            {
                "key": 41,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain how modulation is used in communication systems to transmit signals over long distances. Provide examples of different types of modulation techniques used in modern communication systems.",
                "solution": "Modulation is the process of varying one or more properties of a high-frequency periodic waveform, called the carrier signal, with the information signal to be transmitted. In communication systems, modulation is used to increase the range and efficiency of signal transmission over long distances. Different types of modulation techniques used in modern communication systems include 1. Amplitude Modulation AM In AM, the amplitude of the carrier signal is varied in proportion to the message signal. It is commonly used in broadcast radio transmissions. 2. Frequency Modulation FM In FM, the frequency of the carrier signal is varied according to the message signal. FM is widely used in commercial radio broadcasts and high-fidelity music transmissions. 3. Phase Modulation PM In PM, the phase of the carrier signal is varied based on the message signal. PM is commonly used in satellite communications and digital data transmissions. 4. Digital Modulation Digital modulation techniques like Phase Shift Keying PSK, Quadrature Amplitude Modulation QAM, and Frequency Shift Keying FSK are used in modern digital communication systems like Wi-Fi, Bluetooth, and cellular networks. By using modulation techniques, communication systems can efficiently transmit signals over long distances by overcoming noise and signal degradation issues."
            },
            {
                "key": 32,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the basic difference between conductors, insulators, and semiconductors in terms of their electrical conductivity?",
                "solution": "Conductors, insulators, and semiconductors differ in terms of their electrical conductivity due to the varying number of free electrons in each material. 1. Conductors Conductors have a high density of free electrons that can easily move through the material when a voltage is applied. This allows electric current to flow easily. Metals like copper and aluminum are good examples of conductors. 2. Insulators Insulators have very few free electrons, so they do not conduct electricity easily. When a voltage is applied, insulators do not allow the flow of electric current. Examples of insulators include rubber, glass, and plastic. 3. Semiconductors Semiconductors have conductivity values between those of conductors and insulators. They have a moderate number of free electrons that can conduct electricity under certain conditions. Silicon and germanium are common semiconductor materials used in electronic devices. In summary, conductors have high conductivity due to a large number of free electrons, insulators have low conductivity due to very few free electrons, and semiconductors have moderate conductivity due to an intermediate number of free electrons."
            },
            {
                "key": 96,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Define friction and explain its significance in our daily lives with two examples.",
                "solution": "Friction is a force that opposes the relative motion between two surfaces in contact. It plays a crucial role in our daily lives by 1. Providing grip Friction helps us walk on the ground without slipping by providing the necessary grip between our feet and the surface. For example, shoes have treads to increase friction and prevent slipping. 2. Slowing down Friction helps in slowing down moving objects, such as vehicles coming to a stop when brakes are applied. This prevents accidents and ensures safety on roads. In conclusion, friction is essential for our daily activities as it helps in providing grip and slowing down objects, making our lives safer and more manageable."
            },
            {
                "key": 99,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the direction of the magnetic force experienced by a positive charge moving vertically upwards in a magnetic field pointing eastwards?",
                "solution": "Since the positive charge is moving vertically upwards, and the magnetic field is pointing eastwards, we can use the right-hand rule to determine the direction of the magnetic force. According to the right-hand rule, if we point the thumb of our right hand in the direction of the positive charge's velocity upwards, and our fingers in the direction of the magnetic field eastwards, then the palm of our hand will show the direction of the magnetic force. Therefore, the magnetic force experienced by the positive charge moving vertically upwards in a magnetic field pointing eastwards will be towards the north."
            },
            {
                "key": 92,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the basic principle behind the functioning of a P-N junction diode in semiconductor electronics?",
                "solution": "The basic principle behind the functioning of a P-N junction diode in semiconductor electronics is the formation of a depletion region at the junction between the P-type and N-type semiconductors. When a P-N junction diode is forward-biased, the positive terminal of the battery is connected to the P-side and the negative terminal is connected to the N-side. This causes the free electrons from the N-type material and the holes from the P-type material to move towards the junction and recombine, reducing the width of the depletion region. As a result, a current flows through the diode. On the other hand, when the diode is reverse-biased, the depletion region widens and prevents the flow of current. This simple mechanism of forward and reverse biasing allows P-N junction diodes to function as rectifiers, allowing current to flow in one direction while blocking it in the other direction."
            },
            {
                "key": 74,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain how the phenomenon of diffraction occurs in the context of wave optics, and provide an example to illustrate its significance in everyday life.",
                "solution": "Diffraction is a phenomenon that occurs when a wave encounters an obstacle or passes through a narrow opening. In the context of wave optics, diffraction is the bending of light waves around obstacles or through small openings. When a wave encounters an obstacle or passes through a narrow opening, it spreads out and bends around the edges of the obstacle or opening. This bending of the waves leads to the phenomenon of diffraction. An everyday example of diffraction is the spreading of light around the edges of a door frame when sunlight enters a room. This can be observed as a pattern of light and dark fringes on the floor or walls near the door, demonstrating the bending of light waves around the edges of the door frame. In conclusion, the phenomenon of diffraction in wave optics can be observed when light waves bend around obstacles or pass through narrow openings, leading to the spreading of light and the formation of interference patterns."
            },
            {
                "key": 3,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Define the term 'reflection of light'. Can you distinguish between specular and diffuse reflection? Give an example of each type of reflection.",
                "solution": "The reflection of light is the process in which light waves bounce off a surface. When light rays hit a smooth and polished surface, they undergo specular reflection. In this type of reflection, the rays bounce off at the same angle as they hit the surface. Example Reflection in a mirror. On the other hand, when light rays hit a rough or uneven surface, they undergo diffuse reflection. In this type of reflection, the rays are scattered in different directions. Example Reflection on a piece of paper. In summary, the reflection of light is the bouncing off of light rays from a surface. Specular reflection occurs on a smooth surface where rays bounce off at the same angle, while diffuse reflection occurs on a rough surface where rays are scattered in different directions."
            },
            {
                "key": 210,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fusion in the context of stellar nucleosynthesis and elaborate on its role in the energy production of stars.",
                "solution": "Nuclear fusion is the process by which two atomic nuclei combine to form a heavier nucleus, releasing a large amount of energy in the process. In the context of stellar nucleosynthesis, nuclear fusion plays a crucial role in the energy production of stars by powering their core. In stars, particularly main sequence stars like our Sun, hydrogen nuclei protons undergo fusion reactions to form helium nuclei. This process, known as the proton-proton chain reaction, releases a tremendous amount of energy in the form of heat and light. The energy produced through nuclear fusion in stars is what ultimately sustains their brightness and heat generation. Nuclear fusion in stars is essential for maintaining the equilibrium between the inward gravitational forces pulling the star's matter towards its core and the outward pressure generated by the fusion reactions. Without this balance, the star would either collapse under its own gravity or expand uncontrollably. In conclusion, nuclear fusion plays a critical role in stellar nucleosynthesis by facilitating the energy production necessary for stars to shine and sustain life-giving processes."
            },
            {
                "key": 83,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "Explain how the phenomenon of total internal reflection occurs in a prism and discuss its applications in real-life situations.",
                "solution": "Total internal reflection occurs in a prism when a light ray traveling from a denser medium to a rarer medium strikes the boundary at an angle greater than the critical angle. At this critical angle, the light ray reflects back into the denser medium rather than refracting out. Applications of total internal reflection in real-life situations include 1. Fiber optics Total internal reflection is utilized in fiber optic cables to transmit data over long distances by reflecting light within the core of the cable. 2. Binoculars and periscopes Total internal reflection is used in these optical devices to provide a clear and magnified view of distant objects. 3. Endoscopes Medical instruments like endoscopes use total internal reflection to illuminate and visualize internal organs during minimally invasive procedures. 4. Mirage Total internal reflection plays a role in creating mirages in deserts and on hot roads by reflecting light to create optical illusions. These applications demonstrate the importance of total internal reflection in various practical scenarios."
            },
            {
                "key": 49,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the concept of the magnetic field produced by a current-carrying conductor using the right-hand thumb rule. How can you determine the direction of the magnetic field around a straight current-carrying conductor?",
                "solution": "The right-hand thumb rule is used to determine the direction of the magnetic field produced by a current-carrying conductor. According to this rule, if you point your right thumb in the direction of the current flow, then the direction in which the other fingers curl around the conductor represents the direction of the magnetic field lines. To determine the direction of the magnetic field around a straight current-carrying conductor, follow these steps 1. Hold the current-carrying conductor in your right hand with your thumb pointing in the direction of the current flow. 2. The direction in which your fingers curl around the conductor represents the direction of the magnetic field lines. Using the right-hand thumb rule, it is easy to visualize and understand the concept of the magnetic field produced by a current-carrying conductor."
            },
            {
                "key": 168,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain how magnetism is related to the movement of charged particles in an atom and how this principle is applied in technologies such as MRI machines.",
                "solution": "In an atom, electrons move around the nucleus in specific orbits. These moving charged particles create a magnetic field due to their movement. This magnetic field is the basis of magnetism related to charged particles in an atom. In technologies like MRI Magnetic Resonance Imaging machines, this principle is applied effectively. MRI machines use strong magnetic fields and radio waves to create detailed images of organs and tissues inside the body. The magnetic field causes the hydrogen atoms in the body to align in a particular direction. When radio waves are applied, the hydrogen atoms absorb the energy and then emit signals that are picked up by detectors to create images. Therefore, the connection between magnetism and the movement of charged particles in an atom is crucial in understanding how MRI machines work and how they can provide detailed images of the human body for medical diagnoses."
            },
            {
                "key": 246,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Explain the concept of static friction and give an example from everyday life where static friction plays a crucial role.",
                "solution": "Answer Static friction is the frictional force that prevents an object from moving when a force is applied to it, but the object is not moving. It acts in the opposite direction of the applied force and adjusts its magnitude to exactly balance the applied force, thus keeping the object at rest. An example of static friction from everyday life is pushing a heavy furniture piece across the floor. Initially, the furniture does not move despite applying a force, due to the static friction between the furniture and the floor. Once the force applied is greater than the maximum static friction, the furniture starts moving. In conclusion, static friction plays a crucial role in keeping objects stationary when a force is applied to them, demonstrating its significance in everyday activities."
            },
            {
                "key": 46,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the difference between static friction and kinetic friction, providing examples to illustrate each type of friction. How does the coefficient of friction affect the force of friction in each case?",
                "solution": "In simple terms, static friction occurs between stationary objects, while kinetic friction occurs between moving objects. The coefficient of friction represents the resistance to motion between two surfaces in contact. For example, when a book is resting on a table, static friction keeps it in place until a force is applied to move it. On the other hand, when the book is pushed across the table, kinetic friction slows down its motion. The coefficient of static friction is typically greater than the coefficient of kinetic friction. This means that more force is required to overcome static friction initially, compared to the force needed to maintain motion against kinetic friction. Overall, the coefficient of friction directly affects the force of friction in both cases. Higher coefficients result in greater frictional forces, making it harder to move or keep objects in place."
            },
            {
                "key": 294,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "In a double-slit interference setup, the separation between the slits is 0.2 mm and they are illuminated with light of wavelength 600 nm. If the interference pattern is observed on a screen 2 meters away, calculate the distance between the central maximum and the first-order maximum on the screen.",
                "solution": "Given Wavelength of light, 600 nm 600 10-9 m Distance between the slits, d 0.2 mm 0.2 10-3 m Distance to the screen, L 2 m Distance between central maximum and first-order maximum is given by y L d Plugging in the values y 2 600 10-9 0.2 10-3 y 2 3 10-6 2 10-4 y 6 10-6 2 10-4 y 3 10-2 y 0.03 meters Therefore, the distance between the central maximum and the first-order maximum on the screen is 0.03 meters."
            },
            {
                "key": 63,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Define the term 'Refraction of light'. Explain with the help of a diagram showing the bending of light when it passes through a glass slab.",
                "solution": "Refraction of light is the phenomenon of change in the direction of light as it passes from one medium to another medium of different optical density. It occurs due to the change in the speed of light when it travels from one medium to another. Explanation with diagram - When light rays pass from air to a denser medium like a glass slab, they bend towards the normal line drawn at the point of incidence. - This bending of light is due to the decrease in the speed of light in the denser medium. - As the light ray exits the glass slab and enters air again, it bends away from the normal line. - The angle of incidence i is equal to the angle of refraction r at the interface of the two media. Diagram illustration showing the bending of light when passing through a glass slab This is how light undergoes refraction when passing through a glass slab due to the change in its speed as it moves from air to a denser medium and vice versa."
            },
            {
                "key": 206,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "A block of mass 5 kg is placed on a rough horizontal surface with a coefficient of friction 0.4. A force of 30 N is applied to the block horizontally. Calculate the acceleration of the block and the frictional force acting on it. Given that the gravitational acceleration is 9.8 ms2. Assume that the block remains in a state of uniform motion.",
                "solution": "Generic Solution To solve this problem, we need to consider the forces acting on the block. The applied force, frictional force, and the weight of the block are the main forces to be considered in this case. By applying Newton's second law of motion, we can find the acceleration of the block and the frictional force acting on it. Short Solution 1. Calculate the weight of the block W m times g W 5 kg times 9.8 ms2 49 N 2. Determine the maximum possible frictional force Fmax mu times N Fmax 0.4 times 49 N 19.6 N 3. Since the applied force is less than the maximum frictional force, the block will move with constant velocity, and the frictional force will be equal to the applied force. 4. Calculate the acceleration of the block a fracFm a frac30 N5 kg 6 ms2 5. Frictional force acting on the block Ffriction 30 N Therefore, the acceleration of the block is 6 ms2 and the frictional force acting on it is 30 N."
            },
            {
                "key": 42,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain how a P-N junction diode works and discuss its application in rectifiers.",
                "solution": "A P-N junction diode works on the principle of majority and minority charge carriers. When a P-type semiconductor which has holes as majority carriers is connected to an N-type semiconductor which has electrons as majority carriers, a depletion region is formed at the junction due to the diffusion of carriers. This creates an electric field which prevents further flow of majority carriers across the junction. When a forward bias voltage is applied, the depletion region is reduced, allowing the majority carriers to flow, resulting in current flow. In reverse bias, the depletion region widens, blocking the flow of majority carriers. The application of P-N junction diode in rectifiers is to convert alternating current AC into direct current DC. When an alternating voltage is applied across a diode in a circuit, during the positive half cycle, the diode conducts and allows current to flow in one direction forward bias. During the negative half cycle, the diode blocks the flow of current in the reverse bias direction. This process results in the conversion of AC to DC, which is essential for various electronic devices and power supplies. In conclusion, the P-N junction diode works by allowing current flow in one direction and blocking it in the other, making it suitable for rectifier applications in converting AC to DC."
            },
            {
                "key": 111,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems and discuss how amplitude modulation AM and frequency modulation FM differ in terms of their advantages and applications.",
                "solution": "Modulation is the process of varying a carrier wave's properties to encode information. In amplitude modulation AM, the amplitude of the carrier wave is varied in accordance with the signal being transmitted, while in frequency modulation FM, the frequency of the carrier wave is varied. AM offers the advantage of simplicity and is less susceptible to noise compared to FM. It is commonly used in broadcasting and two-way radio communication. On the other hand, FM provides better sound quality and is more immune to amplitude variations, making it suitable for high-fidelity music transmission and satellite communication. In summary, AM is preferred for its simplicity and wide coverage, whereas FM is preferred for its better sound quality and noise resistance. Each modulation technique has its own set of advantages and applications based on the specific requirements of the communication system."
            },
            {
                "key": 257,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Discuss the role of electrostatic forces in biological systems with specific examples. How do cells utilize electrostatic interactions for various biological processes? Illustrate with the help of relevant diagrams and explanations.",
                "solution": "Electrostatic forces play a crucial role in biological systems by influencing various biological processes. One of the key examples of the importance of electrostatic forces in biology is the interaction between charged molecules such as proteins and nucleic acids within cells. Cells utilize electrostatic interactions for various biological processes such as enzyme-substrate binding, DNA replication, and cell signaling. For instance, in enzyme-substrate binding, the active site of an enzyme and its substrate often have complementary charges that enable them to attract each other and form a stable complex. This electrostatic interaction facilitates the catalytic activity of the enzyme. In DNA replication, the negatively charged phosphate backbone of the DNA molecule interacts with positively charged ions to maintain the structural integrity of the double helix. These electrostatic interactions are vital for the accurate replication of genetic information during cell division. Cell signaling processes also rely on electrostatic interactions to transmit signals within and between cells. For example, ligands binding to cell surface receptors trigger a series of electrostatic interactions that ultimately lead to the activation of intracellular signaling pathways, regulating various cellular functions. The diagrams below illustrate the importance of electrostatic interactions in enzyme-substrate binding and cell signaling processes Diagram 1 Enzyme-substrate binding with complementary charges Diagram 2 Cell signaling cascade with electrostatic interactions In conclusion, electrostatic forces play a crucial role in biological systems by facilitating various processes essential for cell function and survival. Understanding the significance of electrostatic interactions in biology provides insights into the molecular mechanisms underlying biological phenomena."
            },
            {
                "key": 97,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric field and how it is related to the force experienced by a charged particle placed in it.",
                "solution": "Sure! Here is a generic and short solution for your CBSE 11th board physics question The concept of electric field is a region around a charged particle or object where another charged particle experiences a force. It is a vector quantity and is denoted by vector E. The electric field is related to the force experienced by a charged particle through the formula F qE, where F is the force experienced by the charged particle, q is the charge of the particle, and E is the electric field strength at the point where the particle is placed. Therefore, the force experienced by a charged particle placed in an electric field is directly proportional to the charge of the particle and the strength of the electric field at that point. I hope this helps you with your question!"
            },
            {
                "key": 318,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "What is the significance of the term magnetic moment in the context of magnetic materials and how does it relate to the behavior of atoms and molecules in the presence of an external magnetic field? Provide examples to support your explanation.",
                "solution": "The term magnetic moment is significant in the context of magnetic materials as it represents the strength and orientation of the magnetic field produced by an atom or molecule. It is a measure of the intrinsic magnetic property of the material. In the presence of an external magnetic field, atoms and molecules with non-zero magnetic moments tend to align their magnetic dipoles with the applied field. This alignment results in the material either being attracted or repelled by the external magnetic field, exhibiting paramagnetic or diamagnetic behavior respectively. For example, transition metals such as iron exhibit strong magnetic behavior due to the presence of unpaired electrons in their d-orbitals, leading to non-zero magnetic moments. On the other hand, noble gases like helium are diamagnetic since all their electrons are paired, resulting in zero net magnetic moment. In summary, understanding the concept of magnetic moment is crucial in explaining the magnetic behavior of atoms and molecules in the presence of an external magnetic field in magnetic materials."
            },
            {
                "key": 136,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the concept of static friction and provide an example from everyday life where static friction plays a role.",
                "solution": "Static friction is the force that prevents an object from moving when a force is applied to it but the object does not move. It is the friction between two surfaces that are not moving relative to each other. An example of static friction in everyday life is when you push a heavy book across a table. The static friction between the book and the table prevents the book from moving until you apply enough force to overcome this friction. In conclusion, static friction is important as it allows us to grip objects, walk without slipping, and perform various tasks in everyday life."
            },
            {
                "key": 124,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon that causes light to bend when it passes through a medium of different optical density?",
                "solution": "The phenomenon that causes light to bend when it passes through a medium of different optical density is known as refraction. Refraction occurs due to the change in the speed of light as it travels from one medium to another with a different optical density. This change in speed causes the light rays to bend, resulting in the phenomenon of refraction."
            },
            {
                "key": 24,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "What are the differences between interference and diffraction in the context of wave optics, and how do they influence the behavior of light waves in various conditions? Provide examples to support your answer.",
                "solution": "Interference and diffraction are two important phenomena in wave optics that have distinct characteristics. Interference involves the superposition of waves from two or more coherent sources to create a resultant wave pattern. It leads to the formation of stationary wave patterns with alternating bright and dark fringes, such as in Young's double-slit experiment. Diffraction, on the other hand, refers to the bending of waves around obstacles or through apertures, leading to the spreading of waves in various directions. It results in the formation of patterns like single-slit diffraction or diffraction grating patterns. Influence on behavior - Interference results in the formation of constructive and destructive interference patterns that influence the intensity of light at different points. - Diffraction causes the spreading of light waves, affecting the resolution and sharpness of images formed. Examples - Interference Formation of colorful patterns in soap bubbles due to interference of reflected light waves. - Diffraction Blurring of images when light passes through a small aperture, such as when using a pinhole camera. Understanding these differences helps in explaining various optical phenomena and their applications in real-world scenarios."
            },
            {
                "key": 118,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of hysteresis in the context of magnetic materials and discuss its significance in practical applications involving electromagnets.",
                "solution": "Hysteresis in the context of magnetic materials refers to the phenomenon where the magnetization of a material lags behind the applied magnetic field due to internal friction within the material. In practical applications involving electromagnets, hysteresis is significant because it affects the efficiency and performance of the electromagnet. The hysteresis loop of a material determines its magnetic properties such as coercivity and remanence. Understanding hysteresis helps in designing electromagnets with precise control over their magnetic behavior, ensuring optimal performance in various applications such as magnetic sensors, electric motors, transformers, and magnetic storage devices. Therefore, minimizing hysteresis losses is crucial in improving the efficiency and reliability of electromagnets, making it an essential concept in the field of magnetism and its practical applications."
            },
            {
                "key": 274,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon where two waves combine to form a single wave with an amplitude equal to the sum of the individual wave amplitudes called in the context of wave optics?",
                "solution": "The phenomenon where two waves combine to form a single wave with an amplitude equal to the sum of the individual wave amplitudes is called the Principle of Superposition in the context of wave optics."
            },
            {
                "key": 44,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Describe the phenomenon of diffraction of light and explain how it is different from the phenomenon of interference of light. Provide examples to support your answer.",
                "solution": "Diffraction of Light - Diffraction of light refers to the bending of light waves around obstacles or through small openings. - It occurs when light waves encounter an obstacle or aperture that is comparable in size to the wavelength of light. - An example of diffraction is when light waves pass through a narrow slit and spread out on the other side, creating interference patterns. Interference of Light - Interference of light occurs when two or more light waves overlap and either reinforce or cancel each other out. - It happens when light waves from different sources or parts of the same source combine and interact with each other. - A classic example of interference is the formation of colorful patterns in soap bubbles due to the interference of light waves. Difference - Diffraction primarily involves the bending of light waves around obstacles or through openings, while interference involves the interaction of light waves to create patterns of reinforcement or cancellation. - Diffraction occurs when light encounters an obstacle, whereas interference occurs when light waves overlap and combine. - Diffraction is a result of the wave nature of light, whereas interference is a result of the superposition of light waves. In conclusion, diffraction of light involves the bending of light waves, while interference of light involves the interaction of light waves to create patterns. Both phenomena are based on the wave nature of light but occur in different scenarios."
            },
            {
                "key": 160,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the difference between an atom and a nucleus in terms of structure and composition?",
                "solution": "Atom is the basic unit of matter composed of protons, neutrons, and electrons. The nucleus is the central part of an atom containing protons and neutrons. The key difference between an atom and a nucleus is that the atom consists of both nucleus and electrons, whereas the nucleus is the center of the atom containing protons and neutrons."
            },
            {
                "key": 16,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the concept of limiting friction with the help of a neat diagram. How does the coefficient of friction affect the limiting friction between two surfaces? Give an example to illustrate your answer.",
                "solution": "Limiting friction is the maximum frictional force that comes into play just before an object is about to move. It is denoted by the symbol Ffrictionlimiting. The concept can be explained using a block resting on a surface. When a force is applied to the block, static friction initially acts in the opposite direction to prevent the block from moving. As the applied force increases, static friction also increases until a point is reached where the static friction is at its maximum - this is the limiting friction. The coefficient of friction affects the limiting friction between two surfaces. The formula for calculating limiting friction is Ffrictionlimiting N, where N is the normal force acting on the object and is the coefficient of friction between the two surfaces. For example, if the coefficient of friction between a wooden block and a table is 0.5, and the normal force acting on the block is 10 N, the limiting friction will be 5 N 0.5 10. In conclusion, the coefficient of friction plays a crucial role in determining the limiting friction between two surfaces, and understanding this concept is essential in the study of friction in physics."
            },
            {
                "key": 157,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "What is the significance of electrostatic interactions in biological systems?",
                "solution": "The significance of electrostatic interactions in biological systems is vast and crucial for maintaining the structure and function of biological molecules. These interactions play a key role in protein folding, DNA structure, enzyme-substrate interactions, and cell signaling processes. Electrostatic forces help stabilize the structure of biomolecules, regulate their interactions with other molecules, and facilitate various cellular processes. Overall, electrostatic interactions are essential for the proper functioning of biological systems at the molecular level."
            },
            {
                "key": 319,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain Faraday's law of electromagnetic induction and how it relates to the generation of electric currents in a moving conductor. How can the direction of induced current be determined using Lenz's law? Give an example to illustrate the application of Faraday's law in real-life situations.",
                "solution": "Faraday's law of electromagnetic induction states that a change in magnetic field around a conductor induces an electromotive force emf in the conductor, leading to the generation of an electric current. This phenomenon is the basis for the generation of electric currents in moving conductors. When a conductor moves within a magnetic field, the magnetic flux through the conductor changes, inducing an emf according to Faraday's law. The direction of induced current can be determined using Lenz's law, which states that the induced current flows in a direction that opposes the change in magnetic field causing it. For example, when a magnet is moved in and out of a coil of wire, the changing magnetic field induces an emf in the coil, resulting in the generation of an electric current. The direction of this induced current can be determined by applying Lenz's law, which tells us that the current will flow in such a way as to create a magnetic field that opposes the change in magnetic flux. In real-life situations, Faraday's law is utilized in devices such as generators, transformers, and induction cooktops, where the generation of electric currents through the movement of conductors within magnetic fields is essential for their operation."
            },
            {
                "key": 35,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the Hertzsprung-Russell diagram and how does it help in understanding the life cycle of stars in the universe?",
                "solution": "The Hertzsprung-Russell H-R diagram is a graphical representation that plots the luminosity of stars against their surface temperature. It helps in categorizing stars based on their characteristics such as size, temperature, brightness, and stage in their life cycle. In the H-R diagram, stars are classified into main sequence stars, giant stars, supergiant stars, and white dwarfs based on their position on the graph. By studying the H-R diagram, scientists can understand the life cycle of stars in the universe. For example, main sequence stars like our Sun are in a stable phase where hydrogen is converted into helium in their cores. As stars evolve, they move away from the main sequence, expand into red giants or supergiants, and eventually exhaust their nuclear fuel leading to different outcomes like black holes, neutron stars, or white dwarfs. Therefore, the Hertzsprung-Russell diagram provides a valuable tool for astronomers to study and interpret the life cycles of stars in the universe."
            },
            {
                "key": 58,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of magnetic domains and how they contribute to the magnetization of a material at the atomic level. Include examples to support your explanation.",
                "solution": "Magnetic domains are regions within a material where the magnetic moments of atoms are aligned in the same direction. In the absence of an external magnetic field, the magnetic moments of atoms point in random directions, resulting in little to no overall magnetization. When an external magnetic field is applied, these magnetic domains align in the direction of the field, leading to magnetization of the material. For example, in a ferromagnetic material like iron, nickel, or cobalt, magnetic domains play a crucial role in its magnetic properties. When the material is unmagnetized, the magnetic domains are randomly oriented, canceling out each other's magnetic effects. However, when an external magnetic field is applied, these domains align, reinforcing the magnetic field and making the material magnetic. In conclusion, magnetic domains are responsible for the magnetization of materials at the atomic level by aligning the magnetic moments of atoms in the same direction when exposed to an external magnetic field. This phenomenon enhances the magnetic properties of ferromagnetic materials like iron, nickel, and cobalt."
            },
            {
                "key": 269,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "In the context of moving charge and magnetism, explain Faraday's law of electromagnetic induction and describe its significance in the generation of induced electromotive force. Illustrate with an example involving the concepts of magnetic field, induced current, and electromagnetic waves.",
                "solution": "Faraday's law of electromagnetic induction states that a change in magnetic field in a closed loop induces an electromotive force EMF in the loop. This induced EMF leads to the generation of current in the loop. Significance 1. It forms the basis of electric power generation in power plants. 2. It explains the working principle of generators and transformers. 3. It is crucial in the development of electromagnetic devices, such as electric motors. Example Consider a loop of wire moving through a magnetic field. As the loop moves, the magnetic field within the loop changes, inducing an EMF according to Faraday's law. This induced EMF results in the generation of current in the wire loop, creating an electromagnetic wave. Overall, Faraday's law of electromagnetic induction plays a vital role in the understanding and application of electromagnetic phenomena."
            },
            {
                "key": 50,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the difference between atomic number and mass number of an atom? Explain how these two properties are determined for an atom and provide an example to illustrate your answer.",
                "solution": "Atomic number of an atom - Definition Atomic number of an atom is the number of protons present in the nucleus of the atom. - Determination Atomic number is determined by counting the number of protons in the nucleus using the periodic table. - Example For carbon atom, the atomic number is 6 because it has 6 protons in its nucleus. Mass number of an atom - Definition Mass number of an atom is the total number of protons and neutrons present in the nucleus of the atom. - Determination Mass number is determined by adding the number of protons and neutrons in the nucleus. - Example For carbon atom, the mass number is 12 because it has 6 protons and 6 neutrons in its nucleus. Difference between atomic number and mass number - Atomic number is the number of protons, while mass number is the total number of protons and neutrons. - Atomic number determines the element's identity, while mass number helps in determining the isotope of an element. In summary, the atomic number and mass number of an atom are key properties that help in identifying and characterizing an atom."
            },
            {
                "key": 11,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems. How does modulation help in the transmission of signals over long distances? Provide examples of different types of modulation techniques used in the field of communication.",
                "solution": "Modulation is the process of varying one or more properties of a high-frequency periodic waveform, known as the carrier signal, with a lower-frequency signal to carry information. In communication systems, modulation helps in transferring the baseband signal information signal over long distances by converting it into a high-frequency signal that can travel longer distances efficiently without significant loss of information. Modulation allows multiple signals to share the same transmission medium without interfering with each other. It helps in improving the efficiency and reliability of communication systems. There are several types of modulation techniques used in communication systems. Some common examples include 1. Amplitude Modulation AM In AM, the amplitude of the carrier signal is varied in proportion to the amplitude of the baseband signal. 2. Frequency Modulation FM In FM, the frequency of the carrier signal is varied in proportion to the amplitude of the baseband signal. 3. Phase Modulation PM In PM, the phase of the carrier signal is varied in proportion to the amplitude of the baseband signal. These modulation techniques are widely used in radio broadcasting, television transmission, mobile communication, and various other communication systems to efficiently transmit signals over long distances. In conclusion, modulation plays a crucial role in communication systems by enabling the transmission of information signals over long distances and allowing multiple signals to coexist in the same transmission medium."
            },
            {
                "key": 315,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "How does the concept of equilibrium relate to chemical reactions that occur in the Universe, such as the formation of stars and galaxies? Provide examples to support your answer.",
                "solution": "In the Universe, the concept of equilibrium is crucial in understanding the chemical reactions that drive the formation of stars and galaxies. Equilibrium in chemical reactions is reached when the rate of the forward reaction equals the rate of the reverse reaction. Similarly, in the Universe, various chemical reactions occur continuously to maintain equilibrium in cosmic processes. For example, in the formation of stars, the balance between gravitational forces pulling matter inward and the heat generated by nuclear reactions pushing matter outward is essential for achieving equilibrium. This equilibrium allows a star to maintain stability and support the fusion reactions that power its existence. In the context of galaxies, the equilibrium between gravitational attraction and outward momentum generated by the rotational motion of stars and gases is crucial for maintaining the structure and stability of a galaxy. This equilibrium prevents the collapse or dispersion of matter and helps galaxies maintain their shape and structure over vast cosmic timescales. Overall, the concept of equilibrium in chemical reactions is fundamental to understanding the dynamic processes that drive the formation and evolution of stars and galaxies in the Universe."
            },
            {
                "key": 190,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Define nuclear fission and provide an example of a nuclear reactor where nuclear fission is utilized for power generation.",
                "solution": "Answer Nuclear fission is the process in which the nucleus of an atom splits into two or more smaller nuclei, along with the release of a large amount of energy. A well-known example of a nuclear reactor that utilizes nuclear fission for power generation is the pressurized water reactor PWR. In a PWR, uranium or plutonium atoms are bombarded with neutrons, causing them to split and release energy in the form of heat, which is then used to generate electricity through turbines."
            },
            {
                "key": 86,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain how the concept of static friction plays a significant role in the functioning of human joints, such as the knee joint, during movement. Give examples to support your explanation.",
                "solution": "Static friction plays a crucial role in the functioning of human joints like the knee joint during movement. In the knee joint, static friction prevents the bones from slipping out of place when we move. It provides stability and support to the joint, allowing smooth and controlled movements without dislocation. For example, when we bend our knee to walk or run, static friction between the bones of the knee joint keeps them in place and helps in transmitting the force generated by muscles during movement. Without static friction, the bones would slide against each other, causing pain and instability in the joint. In conclusion, static friction is essential for maintaining the structural integrity and functionality of human joints like the knee joint during various movements."
            },
            {
                "key": 249,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the concept of electromagnetic induction and its significance in daily life, giving examples to support your answer.",
                "solution": "Electromagnetic induction is the phenomenon of generating an electromotive force emf in a conductor when it is exposed to a changing magnetic field. This concept is based on Faraday's law of electromagnetic induction. Significance in daily life 1. Electric generators Electromagnetic induction is crucial in the working of electric generators, which are used to produce electricity for various purposes in our daily lives. 2. Induction cooktops Induction cooktops work on the principle of electromagnetic induction to heat the cookware directly, making cooking more efficient and safer. 3. Transformers Transformers used in power transmission and distribution rely on electromagnetic induction to change the voltage levels in electricity supply. 4. Wireless charging Devices like smartphones utilize electromagnetic induction for wireless charging, providing convenience to users. These examples highlight the practical applications of electromagnetic induction in our daily lives, making it a significant concept in the field of physics and technology."
            },
            {
                "key": 77,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric potential and how it differs from electric potential energy in the context of electrostatics. Provide an example to illustrate your explanation.",
                "solution": "Electric potential is the amount of electric potential energy per unit charge at a given point in an electric field. It is measured in volts and represents the work done in moving a unit positive charge from infinity to that point. On the other hand, electric potential energy is the energy a charge possesses due to its position in an electric field. The key difference between electric potential and electric potential energy is that electric potential is a scalar quantity, while electric potential energy is a scalar quantity. Electric potential depends only on the source charge creating the field and the distance from it, while electric potential energy depends on the test charge's position and the source charge's position in the electric field. For example, consider a positive charge of 2C placed in an electric field created by another positive charge. The electric potential at a point due to the source charge is 3V, indicating the work done in bringing a unit positive charge from infinity to that point. At the same time, the electric potential energy of the charge at that point would be the product of the charge and the electric potential, i.e., 6J. In summary, electric potential represents the electric field strength at a point, while electric potential energy represents the stored energy of a charge in an electric field."
            },
            {
                "key": 72,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of a diode and its application as a rectifier in semiconductor electronics. Also, differentiate between a P-type semiconductor and an N-type semiconductor.",
                "solution": "A diode is a two-terminal electronic component that allows current to flow in one direction only. It consists of a P-type semiconductor positively charged and an N-type semiconductor negatively charged that are joined together to form a PN junction. The concept of a diode is based on the flow of majority charge carriers in the forward biased condition and the blocking of current in the reverse biased condition. It acts as a rectifier by converting alternating current AC to direct current DC by allowing the current flow in only one direction. P-type semiconductor is formed by adding a trivalent impurity such as boron to pure silicon, thereby creating holes for conducting positive charge carriers. N-type semiconductor is formed by adding a pentavalent impurity such as phosphorus to pure silicon, creating free electrons for conducting negative charge carriers. The main difference between the two is that P-type has more holes positive charge carriers while N-type has more free electrons negative charge carriers. In conclusion, a diode is an essential component in semiconductor electronics that acts as a rectifier by allowing current flow in one direction. The differentiation between P-type and N-type semiconductors lies in their charge carriers holes for P-type and free electrons for N-type."
            },
            {
                "key": 103,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "A concave mirror has a focal length of 15 cm. An object is placed 30 cm away from the mirror. Calculate the image distance using the mirror formula and determine whether the image formed is real or virtual.",
                "solution": "Given, focal length f -15 cm negative sign indicates concave mirror Object distance u -30 cm negative sign denotes object is placed in front of the mirror Using mirror formula 1f 1v 1u Substitute the values 1-15 1v 1-30 -230 1v -130 -230 130 1v -130 1v v -30 cm Image distance v -30 cm Since the image distance is negative, the image is formed in front of the mirror. Hence, the image is virtual. Solution complete."
            },
            {
                "key": 244,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "Explain the concept of interference in the context of wave optics and provide an example to illustrate this phenomenon.",
                "solution": "Interference is the phenomenon that occurs when two or more waves superpose to form a resultant wave of greater, lower, or the same amplitude. In the context of wave optics, interference is observed when two or more light waves overlap and interact with each other. For example, consider the interference of two coherent light waves. When two coherent waves meet and are in phase, they amplify each other, resulting in constructive interference. This leads to the formation of bright fringes in the interference pattern. On the other hand, when two coherent waves meet and are out of phase, they cancel each other out, resulting in destructive interference. This results in the formation of dark fringes in the interference pattern. In conclusion, interference in wave optics is a fundamental concept that explains how light waves interact with each other to create patterns of light and dark fringes."
            },
            {
                "key": 287,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "In the context of electrostatics, explain the concept of electric potential and how it is related to electric field strength. Include the equation that relates electric potential, electric field strength, and distance. Provide an example to demonstrate the concept.",
                "solution": "Electric potential is the amount of potential energy per unit charge at a point in an electric field. It is a scalar quantity, denoted by V, and is measured in volts V. The electric potential at a point is directly related to the electric field strength at that point. The electric field strength, represented by E, is a vector quantity that determines the force experienced by a unit positive charge placed in the field. The relationship between electric potential V, electric field strength E, and distance r is given by the equation V E times r where V is the electric potential, E is the electric field strength, and r is the distance from the source of the field. For example, consider a point charge Q creating an electric field. If a positive test charge q is placed at a distance r from the point charge, the electric field strength at that point is given by Coulomb's law as E dfrack times Qr2 where k is the Coulomb constant. By using the equation relating electric potential, electric field strength, and distance, i.e., V E times r, we can calculate the electric potential at the point where the test charge is placed. This demonstrates how electric potential is related to electric field strength in the context of electrostatics."
            },
            {
                "key": 12,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Sure! Here's a question for class 10 CBSE board students studying the SEMICONDUCTOR ELECTRONICS chapter in physics Explain the process of doping in semiconductors. How does the addition of a pentavalent impurity and a trivalent impurity change the conductivity of the semiconductor material? Justify your answer with suitable examples.",
                "solution": "Sure! Here is a concise solution for your question Doping in semiconductors involves the intentional addition of impurities to alter its electrical properties. The addition of a pentavalent impurity such as Phosphorus increases the conductivity of the semiconductor by introducing more electrons into the crystal lattice. This is called N-type doping. On the other hand, the addition of a trivalent impurity like Boron reduces the conductivity by creating holes in the crystal lattice, leading to P-type doping. For example, in Silicon Si crystal, when Phosphorus P is added as a pentavalent impurity, an extra electron is introduced into the crystal lattice, resulting in N-type doping and increasing conductivity. Conversely, when Boron B is added as a trivalent impurity, it creates a hole in the lattice, leading to P-type doping and decreasing conductivity. Therefore, doping with pentavalent and trivalent impurities allows us to control the conductivity of semiconductors by either increasing or decreasing the number of charge carriers present in the material."
            },
            {
                "key": 226,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the concept of kinetic friction and static friction with suitable examples, and differentiate between the two types of friction based on their characteristics and applications in real life situations.",
                "solution": "Kinetic friction is the friction that exists between two surfaces in contact when one of the surfaces is in motion relative to the other. An example of kinetic friction is when a book is pushed across a table, the friction between the book and the table causes it to slow down. Static friction, on the other hand, is the friction that exists between two surfaces in contact when there is no relative motion between the surfaces. An example of static friction is trying to push a heavy box that does not move initially due to the static friction acting against the force applied. Differences between kinetic and static friction 1. Kinetic friction occurs when there is relative motion between surfaces, while static friction occurs when there is no relative motion. 2. The magnitude of static friction is typically greater than kinetic friction. 3. Kinetic friction always acts in the direction opposite to the direction of motion, while static friction acts in the direction opposite to the applied force. 4. Examples of kinetic friction include sliding a box on the floor, while examples of static friction include keeping a book on a table. Real-life applications 1. Kinetic friction Used in braking systems of vehicles to slow down or stop the vehicle. 2. Static friction Used in holding objects in place, such as a book on a table. Understanding and differentiating between kinetic and static friction is crucial in various fields like physics, engineering, and even in everyday tasks like driving and cooking."
            },
            {
                "key": 202,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the working principle of a photodiode and discuss its applications in modern electronic devices.",
                "solution": "A photodiode is a semiconductor device that converts light into an electrical current. It is composed of a p-n junction with a large intrinsic region, allowing it to accurately respond to light intensity. When light falls on the photodiode, electron-hole pairs are generated in the semiconductor material due to the absorption of photons. The electric field present in the p-n junction helps in the separation of these electron-hole pairs, resulting in a flow of current which can be measured as an output signal. Photodiodes are widely used in modern electronic devices for various applications. Some common applications include 1. Light sensors Photodiodes are used in automatic brightness control systems in televisions, smartphones, and other display devices to adjust the screen brightness according to the ambient light conditions. 2. Optical communication Photodiodes are essential components in optical communication systems, such as fiber optic networks, where they detect light signals and convert them into electrical signals for transmission. 3. Remote controls In remote control devices for TVs, air conditioners, etc., photodiodes are used to receive infrared signals and convert them into electrical signals for controlling the device. 4. Medical devices Photodiodes are used in medical devices such as pulse oximeters to measure oxygen saturation levels in the blood by detecting the light absorption characteristics of hemoglobin. In conclusion, the working principle of a photodiode involves the conversion of light into an electrical current through the generation and separation of electron-hole pairs in a semiconductor material. Its applications in modern electronic devices are diverse and essential for various functionalities in fields like communication, sensing, and healthcare."
            },
            {
                "key": 270,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fission and nuclear fusion in terms of atomic structure and energy release. Discuss the potential applications and implications of both processes in the fields of energy production and nuclear weapons development.",
                "solution": "Nuclear fission involves the splitting of a heavy nucleus into two lighter nuclei, releasing a large amount of energy in the process. This process can occur in elements such as uranium and plutonium. On the other hand, nuclear fusion is the combining of two light nuclei to form a heavier nucleus, also releasing a significant amount of energy. This process is seen in the sun where hydrogen nuclei fuse to form helium. In terms of atomic structure, nuclear fission and fusion both involve changes in the nuclei of atoms, leading to the release of energy. In fission, a heavy nucleus is split into two lighter nuclei, while in fusion, two light nuclei combine to form a heavier nucleus. The potential applications of nuclear fission and fusion in energy production are immense. Nuclear fission is commonly used in nuclear power plants to generate electricity on a large scale. Fusion, on the other hand, has the potential to be a clean and virtually limitless source of energy, although it is still in the experimental stage. However, both processes also have implications in the field of nuclear weapons development. Nuclear fission has been used in the development of atomic bombs, while fusion reactions are used in the more powerful hydrogen bombs. In conclusion, nuclear fission and fusion have significant implications in both energy production and nuclear weapons development, highlighting the importance of understanding and regulating these processes."
            },
            {
                "key": 268,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Discuss the significance of biomagnetism in living organisms and explore the mechanisms by which certain organisms exhibit magnetoreception. Provide examples to support your explanation.",
                "solution": "Biomagnetism plays a significant role in the biology of living organisms. Organisms use magnetism in various ways, such as navigation, migration, and sensing environmental cues. Certain organisms exhibit magnetoreception, the ability to detect magnetic fields, through different mechanisms. One such mechanism involves the presence of magnetite crystals in their bodies, which can act as tiny compass needles. These crystals help certain organisms align themselves with the Earth's magnetic field to navigate and migrate efficiently. For example, birds like homing pigeons and migratory birds rely on magnetoreception to navigate during long-distance flights. They can sense the Earth's magnetic field and use it to determine directions accurately. In conclusion, biomagnetism and the phenomenon of magnetoreception are essential for the survival and functioning of various organisms in the natural world, aiding them in navigation, migration, and other behaviors."
            },
            {
                "key": 259,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the mechanism of generation of magnetic field due to a moving charge according to Ampere's Law. How does the direction of the magnetic field depend on the velocity and the direction of movement of the charge? Provide examples to illustrate your answer.",
                "solution": "According to Ampere's Law, a magnetic field is generated around a moving charge due to the circular motion of the charge. When a charge moves in a straight line, no magnetic field is generated. However, when the charge moves in a circular path, a magnetic field is produced around it. The direction of the magnetic field depends on the velocity and the direction of movement of the charge. The magnetic field is perpendicular to both the velocity of the charge and the direction of movement. If the charge moves in a clockwise direction, the magnetic field lines will be in the counterclockwise direction. Conversely, if the charge moves counterclockwise, the magnetic field lines will be in the clockwise direction. One example to illustrate this concept is the motion of electrons in a current-carrying wire. When electrons flow through a wire, they move in a specific direction, generating a magnetic field around the wire in accordance with Ampere's Law. Another example is the motion of charged particles in a cyclotron, where the circular motion of the particles produces a magnetic field along the axis of the cyclotron. Therefore, the mechanism of generation of a magnetic field due to a moving charge according to Ampere's Law involves the circular motion of the charge, with the direction of the magnetic field depending on the velocity and direction of movement of the charge."
            },
            {
                "key": 158,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "What is the basic unit of magnetism and how is it defined in the context of magnetism and matter?",
                "solution": "The basic unit of magnetism is a magnetic dipole. In the context of magnetism and matter, a magnetic dipole is defined as a small unit in a material that generates a magnetic field. This magnetic field is created due to the presence of aligned magnetic moments within the material. These magnetic dipoles tend to align themselves in the direction of an external magnetic field, resulting in the material itself becoming magnetic."
            },
            {
                "key": 266,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "In biological systems, describe how the concept of friction plays a role in various physiological processes at the molecular level. Provide examples and explain how understanding friction in biological systems can help in developing new medical treatments.",
                "solution": "Friction in biological systems plays a crucial role in various physiological processes at the molecular level. One example is the process of muscle contraction, where friction between myosin and actin filaments creates tension, enabling movement. Another example is the interaction between enzymes and substrates, where friction helps in facilitating chemical reactions. Understanding friction in biological systems can help in developing new medical treatments by designing targeted drug delivery systems. By manipulating friction at the molecular level, scientists can enhance the efficacy of drug delivery to specific tissues or cells, thus improving treatment outcomes. Additionally, understanding the role of friction in biological systems can aid in the development of new biomaterials for tissue engineering and regenerative medicine applications."
            },
            {
                "key": 55,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "Discuss the concept of nucleosynthesis and explain how it plays a significant role in the formation of elements in the universe. Also, elaborate on the role of stars in the nucleosynthesis process and how it contributes to the diversity of elements observed in the universe.",
                "solution": "Nucleosynthesis is the process by which elements are formed in the universe. It plays a significant role in the formation of elements by combining smaller atomic nuclei to form heavier elements. The main types of nucleosynthesis are primordial nucleosynthesis, stellar nucleosynthesis, and explosive nucleosynthesis. Stars play a crucial role in the nucleosynthesis process. Through nuclear fusion reactions in their cores, stars convert lighter elements like hydrogen and helium into heavier elements such as carbon, oxygen, and iron. This process releases energy and forms new elements. As stars go through their life cycles, they produce a wide range of elements that are eventually dispersed into space through processes like supernova explosions. The diversity of elements observed in the universe is a result of this nucleosynthesis process in stars. Different stars produce different elements depending on their mass, temperature, and age. This contributes to the rich variety of elements present in the universe, ranging from the lightest elements like hydrogen to the heaviest elements like uranium. In conclusion, nucleosynthesis in stars is essential for the formation of elements in the universe. The role of stars in this process contributes to the wide array of elements observed in the cosmos, adding to the complexity and beauty of the universe."
            },
            {
                "key": 265,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "How does the concept of dark matter influence our current understanding of the structure and dynamics of the universe? Explain the current theories and evidence supporting the existence of dark matter.",
                "solution": "The concept of dark matter significantly influences our understanding of the structure and dynamics of the universe by accounting for the majority of gravitational forces that hold galaxies together, despite being invisible and not interacting with electromagnetic radiation. Current theories propose that dark matter is composed of exotic particles that have not yet been directly detected, but its presence is inferred through its gravitational effects on visible matter and the bending of light. Evidence supporting the existence of dark matter includes observations of galaxy rotation curves, gravitational lensing, and the cosmic microwave background radiation. Dark matter remains a fundamental aspect of modern cosmology, shaping our understanding of the universe at both large and small scales."
            },
            {
                "key": 127,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Which fundamental law of electrostatics states that like charges repel each other and opposite charges attract each other? Provide an example to illustrate this law.",
                "solution": "The fundamental law of electrostatics that states like charges repel each other and opposite charges attract each other is known as Coulomb's Law. Example Take two small plastic balls, one charged positively and the other charged negatively. When brought close to each other, the balls will attract each other opposite charges attract and when brought close to another similarly charged ball, they will repel each other like charges repel. This behavior can be explained by Coulomb's Law, which states that the force between two charges is directly proportional to the product of their magnitudes and inversely proportional to the square of the distance between them."
            },
            {
                "key": 352,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the significance of doping in semiconductor materials and how it influences the conductivity and electron behavior in semiconductor electronics devices at the molecular level. Provide specific examples to support your explanation.",
                "solution": "Doping in semiconductor materials involves intentionally introducing impurities to alter their electrical properties. In the case of p-type doping, holes are created by adding acceptor atoms such as boron, reducing conductivity. This leads to the formation of the P-N junction, which plays a crucial role in semiconductor devices. Conversely, n-type doping involves adding donor atoms like phosphorus, increasing electron concentration and conductivity. This improves the performance of devices like diodes and transistors. Overall, doping influences the conductivity and electron behavior in semiconductors, allowing for the controlled flow of current in electronic devices."
            },
            {
                "key": 132,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of doping in semiconductors and how it affects their conductivity.",
                "solution": "Doping in semiconductors involves intentionally adding impurities to change their electrical properties. By doping a semiconductor with impurities like phosphorus or boron, we can increase its conductivity. Intrinsic semiconductors have equal numbers of electrons and holes, leading to low conductivity. When doped with pentavalent impurities like phosphorus, extra electrons are introduced, increasing conductivity n-type doping. Conversely, doping with trivalent impurities like boron creates holes, enhancing conductivity p-type doping. Doping modifies the number of charge carriers, significantly affecting semiconductor conductivity. This process plays a crucial role in the functionality of semiconductor devices like diodes and transistors."
            },
            {
                "key": 304,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon where two light waves combine to form a wave with larger or smaller amplitude called in the context of wave optics?",
                "solution": "The phenomenon where two light waves combine to form a wave with a larger or smaller amplitude is known as the interference in the context of wave optics."
            },
            {
                "key": 303,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "What is the phenomenon that causes light to change direction when passing from one medium to another in Ray Optics?",
                "solution": "The phenomenon that causes light to change direction when passing from one medium to another in Ray Optics is called refraction. Refraction occurs due to the change in the speed of light as it travels from a medium of one optical density to another. This change in speed causes the light to bend or change direction at the boundary of the two media."
            },
            {
                "key": 254,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "In the context of wave optics, explain the concept of interference and how it is useful in studying properties of light. Provide an example to illustrate the principle of constructive and destructive interference in practice.",
                "solution": "Interference in the context of wave optics is the phenomenon where two or more waves superpose to form a resultant wave of greater, lower, or the same amplitude. This concept is crucial in studying the properties of light as it helps in understanding the behavior of light waves when they interfere with each other. Constructive interference occurs when two waves with the same frequency and amplitude meet in phase, resulting in a wave with a greater amplitude. An example of constructive interference can be seen in the formation of bright fringes in the double-slit experiment. Destructive interference, on the other hand, happens when waves with the same frequency and amplitude meet out of phase, leading to the cancellation of the waves. A classic example of destructive interference is the formation of dark fringes in the double-slit experiment. Overall, interference plays a significant role in wave optics by providing insights into the behavior of light waves, helping us understand phenomena such as diffraction, polarization, and interference patterns."
            },
            {
                "key": 154,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "Explain the concept of interference in wave optics and give an example of its application in everyday life.",
                "solution": "Interference in wave optics refers to the phenomenon where two or more waves interact to produce a resultant wave of greater, lower, or the same amplitude. This interaction can result in constructive or destructive interference, depending on whether the waves are in phase or out of phase. An everyday example of interference is the rainbow formation. When sunlight passes through raindrops, it undergoes both reflection and refraction. The different colors of light waves interfere with each other, resulting in the beautiful spectrum of colors that we see in a rainbow. Therefore, interference plays a crucial role in wave optics and can be observed in various natural phenomena, making it an important concept to understand."
            },
            {
                "key": 253,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain how the human eye focuses on objects at different distances using the principles of ray optics. Illustrate the role of the lens, ciliary muscles, and the process of accommodation in this mechanism.",
                "solution": "To explain how the human eye focuses on objects at different distances using the principles of ray optics, we can start by mentioning that the lens in the eye plays a crucial role in this process. When we look at objects at different distances, the ciliary muscles around the lens contract or relax, allowing the lens to change its shape. This change in shape helps in adjusting the focal length of the lens to focus the light rays from the object onto the retina. The process of accommodation involves the ciliary muscles adjusting the shape of the lens to change its refractive power. When we look at distant objects, the ciliary muscles relax, causing the lens to flatten and decrease its refractive power. Conversely, when we look at close objects, the ciliary muscles contract, causing the lens to become more spherical and increase its refractive power. In summary, the lens, ciliary muscles, and the process of accommodation work together to ensure that light rays from objects at different distances are focused properly on the retina, allowing us to see clearly. This mechanism demonstrates the application of ray optics principles in the functioning of the human eye."
            },
            {
                "key": 278,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "A bar magnet is cut into two equal halves along its length. What will be the polarity of the cut faces of each half? Explain your answer.",
                "solution": "When a bar magnet is cut into two equal halves along its length, each half behaves like a new magnet with two poles. The polarity of the cut faces of each half will be opposite to each other. This is because the North pole of one half will be adjacent to the South pole of the other half. In other words, upon cutting the bar magnet in half along its length, each half will have a North pole on one cut face and a South pole on the other cut face. This is because the poles of a magnet always come in pairs, and when the magnet is cut in half, each half retains one complete pole with opposite polarity on the cut faces. Thus, the polarity of the cut faces of each half of the bar magnet will be opposite to each other, with one cut face having a North pole and the other cut face having a South pole."
            },
            {
                "key": 108,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of magnetic field lines and how they are used to represent the magnetic field around a bar magnet. Discuss the properties of magnetic field lines and how they help in visualizing the direction and strength of the magnetic field.",
                "solution": "Magnetic field lines are imaginary lines that depict the direction of the magnetic field around a magnet. These lines emerge from the north pole and enter the south pole of the magnet. The density of these lines represents the relative strength of the magnetic field. Properties of magnetic field lines 1. They are continuous, closed loops with no start or endpoint. 2. They are closer together where the magnetic field is stronger. 3. They never intersect each other. 4. They always point from North to South outside the magnet and from South to North inside the magnet. Using magnetic field lines to represent the magnetic field around a bar magnet helps in visualizing the direction and strength of the magnetic field. The pattern formed by the field lines can show the shape of the magnetic field and help understand how the field interacts with other magnets or magnetic materials. In conclusion, magnetic field lines provide a useful tool for understanding and visualizing the magnetic field produced by a bar magnet."
            },
            {
                "key": 174,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "How can the phenomenon of interference be used to determine the thickness of a thin film using the concept of optical path difference? Include relevant equations and diagrams in your explanation.",
                "solution": "To determine the thickness of a thin film using interference, we can use the concept of optical path difference. The optical path difference OPD for a thin film is given by the formula OPD 2nt Where OPD Optical Path Difference n Refractive index of the thin film t Thickness of the thin film For thin film interference to occur, the path difference between the two reflected rays should be an integer multiple of the wavelength of light . This condition is known as the condition for constructive interference. Constructive interference condition 2nt m Where m order of interference 1, 2, 3, ... Using this equation, we can determine the thickness of the thin film by knowing the value of refractive index of the film, wavelength of light used, and the order of interference observed. To calculate the thickness of the thin film, measure the wavelength of light used and the order of interference observed. Then, substitute these values into the equation along with the refractive index of the thin film and solve for the thickness t. By analyzing the interference pattern, we can determine the thickness of the thin film accurately using the concept of optical path difference and interference."
            },
            {
                "key": 255,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Big Bang theory and its role in the formation of the universe according to the current understanding in astrophysics. How do scientists use evidence such as cosmic microwave background radiation to support the Big Bang theory?",
                "solution": "The Big Bang theory is the prevailing cosmological model for the observable universe. According to this theory, the universe originated from a singular point around 13.8 billion years ago and has been expanding ever since. This expansion led to the formation of galaxies, stars, planets, and all known matter. Scientists use various forms of evidence to support the Big Bang theory, one of which is the cosmic microwave background radiation CMB. The CMB is a faint glow of light that fills the universe and is leftover radiation from the early stages of the universe. This radiation is considered a crucial piece of evidence for the Big Bang theory because it is uniform in all directions and has a nearly uniform temperature of about 2.7 Kelvin, supporting the idea of a homogeneous and expanding universe. In conclusion, the Big Bang theory has revolutionized our understanding of the origins and evolution of the universe. Scientists use evidence like the cosmic microwave background radiation to provide support for this theory and continue to study the universe to gain further insights into its formation and structure."
            },
            {
                "key": 232,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the working principle of a p-n junction diode in detail, including the concepts of depletion region, diffusion current, and drift current. Additionally, discuss the application of p-n junction diodes in rectification circuits and their role in semiconductor electronics.",
                "solution": "ANSWER The p-n junction diode is a crucial component in semiconductor electronics due to its unique working principle. When a p-type semiconductor excess holes and an n-type semiconductor excess electrons are brought into contact, a p-n junction is formed. At this junction, a depletion region is created due to diffusion of holes from the p-side to the n-side and electrons from the n-side to the p-side. This results in uncovering positive and negative charges, forming an electric field that prevents further diffusion of charge carriers. Diffusion current occurs due to the movement of charge carriers across the junction, while drift current is caused by the electric field pushing the carriers in opposite directions. These currents combine to form the net current flow in the diode. P-n junction diodes are commonly used in rectification circuits to convert alternating current AC to direct current DC. When forward biased, the diode conducts current easily, allowing only one direction of current flow. When reverse biased, the diode acts as an insulator, preventing current flow. In semiconductor electronics, p-n junction diodes play a crucial role in various applications such as voltage regulation, signal modulation, light detection photodiodes, and light emission LEDs. The unique properties of p-n junction diodes make them essential components in modern electronic devices."
            },
            {
                "key": 227,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric field intensity and potential difference in terms of electrostatics. How are they related to each other and what is their significance in understanding electrical phenomena?",
                "solution": "Electric field intensity is a vector quantity that describes the force experienced by a positive test charge placed in an electric field. It points in the direction that a positive charge would move when placed in the field. The electric field intensity is calculated as the force per unit charge. Potential difference, on the other hand, is a scalar quantity that describes the work done to move a unit positive charge between two points in an electric field. It is also known as voltage and is measured in volts. The relationship between electric field intensity E and potential difference V can be described by the equation V E d Where V is the potential difference, E is the electric field intensity, and d is the distance between the two points. Electric field intensity and potential difference are closely related to each other in electrostatics. The electric field intensity at a point in an electric field is directly proportional to the potential difference between two points. Understanding these concepts is crucial in explaining and predicting electrical phenomena such as the behavior of charges in electric circuits, the working of capacitors, and the generation of electric fields in various devices. In conclusion, electric field intensity and potential difference play a vital role in understanding the behavior of electric charges and the interactions between them in electrostatics. By studying these concepts, we can gain insights into how electricity works and apply this knowledge in various real-life situations. --- This generic solution is designed to explain the concepts of electric field intensity and potential difference quickly and concisely to high school students preparing for the CBSE 12th board exams in chemistry."
            },
            {
                "key": 273,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "An object is placed 15 cm in front of a concave mirror with a focal length of 10 cm. Determine the position and nature of the image formed by the mirror in this situation.",
                "solution": "Given data Object distance, u -15 cm negative since the object is in front of the mirror Focal length, f -10 cm negative since it is a concave mirror Using the mirror formula 1f 1v 1u 1-10 1v 1-15 -110 1v - 115 -110 15 - v15v -1 15 - v15 -15 15 - v v -30 cm The negative sign for the image distance indicates that the image is formed on the same side as the object, which means it is a virtual image. The magnification m can be calculated as m -vu --30-15 2 Since the magnification is positive, the image is erect. Therefore, the image is virtual, erect, and formed at a distance of 30 cm on the same side as the object."
            },
            {
                "key": 155,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "What is the theory that explains how the universe began with a rapid expansion from a hot, dense state called the Big Bang?",
                "solution": "Answer The theory that explains how the universe began with a rapid expansion from a hot, dense state called the Big Bang is known as the Big Bang Theory. According to this theory, approximately 13.8 billion years ago, the universe began as a singularity and has been expanding ever since. This theory is supported by various pieces of evidence, such as the observation of cosmic microwave background radiation and the redshift of distant galaxies."
            },
            {
                "key": 71,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Discuss the role of hormones in the communication system of the human body. How do hormones travel through the body and target specific cells or organs? Provide examples of important hormones and their functions in regulating body processes.",
                "solution": "In the human body, hormones play a vital role in the communication system by acting as chemical messengers that regulate various physiological processes. Hormones are secreted by endocrine glands and travel through the bloodstream to target specific cells or organs. The process of hormone transportation involves the hormones being released into the bloodstream by endocrine glands and then carried to target cells or organs that have specific receptors for that hormone. Once the hormone reaches the target cell or organ, it binds to the receptor, triggering a specific response or action within the cell. Some important hormones and their functions in regulating body processes include 1. Insulin Produced by the pancreas, insulin helps regulate blood sugar levels by facilitating the uptake of glucose by cells for energy production. 2. Thyroid hormones T3 and T4 Secreted by the thyroid gland, these hormones regulate metabolism, growth, and development in the body. 3. Adrenaline Produced by the adrenal glands, adrenaline triggers the body's fight or flight response by increasing heart rate, blood flow to muscles, and releasing energy stores during stressful situations. 4. Estrogen and progesterone These female sex hormones play a crucial role in regulating the menstrual cycle, pregnancy, and maintaining female secondary sexual characteristics. 5. Testosterone This male sex hormone is responsible for the development of male reproductive tissues and secondary sexual characteristics. Overall, hormones act as messengers in the communication system of the human body, helping to coordinate and regulate various physiological processes to maintain homeostasis and overall health."
            },
            {
                "key": 131,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the process of modulation in the communication system and discuss the importance of modulation in transmitting signals over long distances.",
                "solution": "- Modulation is the process of varying one or more properties of a high-frequency wave called the carrier wave, with respect to the signal wave that contains the information to be transmitted. - The importance of modulation in transmitting signals over long distances is significant because - Modulation allows the signal to be carried over long distances without losing its strength. - It enables multiple signals to be transmitted simultaneously without interfering with each other. - Modulation helps in reducing the effect of noise and interference during transmission. - It allows the signal to be easily demodulated at the receiving end, where the original information can be extracted. In summary, modulation plays a crucial role in ensuring that signals are efficiently transmitted over long distances in communication systems."
            },
            {
                "key": 20,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fission and how it is utilized in nuclear power plants to generate electricity. Provide an example of a nuclear fission reaction and discuss the advantages and disadvantages of using nuclear energy as a power source.",
                "solution": "Nuclear fission is the process in which a nucleus of an atom splits into two or more smaller nuclei, along with the release of a large amount of energy. This process is utilized in nuclear power plants to generate electricity. In a nuclear power plant, nuclear fission reactions are initiated by bombarding uranium-235 or plutonium-239 with neutrons. This results in the splitting of the nucleus into two smaller nuclei, releasing more neutrons and a significant amount of energy in the form of heat. This heat is then used to convert water into steam, which drives turbines to generate electricity. An example of a nuclear fission reaction is the splitting of a uranium-235 nucleus into two smaller nuclei, along with the release of energy and additional neutrons. Advantages of using nuclear energy as a power source include a high energy output, low greenhouse gas emissions, and a relatively small amount of fuel needed. However, there are also disadvantages such as the generation of radioactive waste, potential for accidents like Chernobyl or Fukushima, and concerns regarding nuclear proliferation. In conclusion, nuclear fission is a powerful process utilized in nuclear power plants to generate electricity, but it comes with its own set of advantages and disadvantages that need to be carefully considered for its use as a power source."
            },
            {
                "key": 107,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "A charge of 2.0 C is placed at a distance of 20 cm from a charge of -3.0 C. Calculate the magnitude and direction of the electrostatic force between the charges.",
                "solution": "Given Charge 1 q1 2.0 C Charge 2 q2 -3.0 C Distance between the charges r 20 cm 0.20 m Electric constant k 9 x 109 Nm2C2 The formula to calculate the electrostatic force between two charges is given by Coulomb's Law F k fracq1 cdot q2r2 Substitute the given values into the formula F 9 times 109 frac2.0 times -3.00.202 F 9 times 109 frac-6.00.04 F -1.35 times 1011 N The magnitude of the electrostatic force is 1.35 x 1011 N, and the negative sign indicates that the force is attractive. Hence, the magnitude of the electrostatic force between the charges is 1.35 x 1011 N, and the direction is attractive. This is a generic and concise solution for the given question at a medium level of difficulty in the Electrostatics chapter for the CBSE 11th board Physics class."
            },
            {
                "key": 129,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the concept of magnetic field around a straight current-carrying conductor using the right-hand thumb rule.",
                "solution": "The right-hand thumb rule is used to determine the direction of the magnetic field around a straight current-carrying conductor. According to the rule, if we point our right thumb in the direction of the current flow, then the curled fingers of the right hand will represent the direction of the magnetic field lines around the conductor. For example, if the current is flowing upwards through the conductor, then wrapping the fingers of the right hand around the conductor in the direction of the current will show the circular magnetic field lines forming concentric circles around the conductor. This rule helps us visualize and understand the magnetic field pattern around a straight current-carrying conductor and is a fundamental concept in the study of moving charges and magnetism."
            },
            {
                "key": 60,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Describe the process of nuclear fission and explain how it differs from nuclear fusion. Discuss the applications and implications of both these processes in terms of energy production and their impact on the environment.",
                "solution": "Nuclear fission is the process of splitting a large atomic nucleus into smaller fragments through the absorption of a neutron. This process releases a large amount of energy in the form of heat and radiation. On the other hand, nuclear fusion involves combining two light atomic nuclei to form a heavier nucleus, releasing even greater amounts of energy. The main difference between nuclear fission and fusion lies in the energy released and the waste products produced. In nuclear fission, elements like uranium or plutonium are split, producing radioactive waste that needs careful disposal. In contrast, nuclear fusion produces helium as waste, which is not radioactive. Applications of nuclear fission include nuclear power plants that generate electricity by harnessing the heat produced during fission reactions. Nuclear fusion is still in the research stage but has the potential to provide a virtually limitless and clean energy source. Both processes have implications for energy production and the environment. While nuclear fission can produce large amounts of energy, it poses risks such as radioactive waste and the potential for accidents like Chernobyl or Fukushima. Nuclear fusion, if successfully developed, could provide a safer and cleaner energy alternative, reducing greenhouse gas emissions and dependency on fossil fuels. In conclusion, nuclear fission and fusion are both important processes for energy production, each with its own advantages and challenges. It is crucial to consider the environmental impact and safety measures associated with these processes while working towards a sustainable energy future."
            },
            {
                "key": 128,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Define the term 'magnetic field' and explain how it is produced around a current-carrying conductor according to the Ampere's circuital law.",
                "solution": "Magnetic field is a region around a magnetic material or a current-carrying conductor where magnetic forces are experienced. According to Ampere's Circuital Law, the magnetic field around a current-carrying conductor is produced due to the flow of electric current through the conductor. The magnetic field lines form closed loops around the conductor in the form of concentric circles. The strength of the magnetic field is directly proportional to the current passing through the conductor and inversely proportional to the distance from the conductor."
            },
            {
                "key": 29,
                "class": "CBSE 10th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the concept of magnetic force on a moving charge and derive the expression for the magnitude and direction of the magnetic force acting on a charged particle moving in a magnetic field.",
                "solution": "To explain the concept of magnetic force on a moving charge, we need to consider the interaction between the magnetic field and the charged particle's motion. When a charged particle moves in a magnetic field, it experiences a force known as the magnetic force. This force is always perpendicular to both the velocity of the charged particle and the direction of the magnetic field. To derive the expression for the magnitude and direction of the magnetic force acting on a charged particle moving in a magnetic field, we use the formula for the magnetic force textMagnetic Force, F qvBsintheta Where - F is the magnetic force on the charged particle, - q is the charge of the particle, - v is the velocity of the particle, - B is the magnetic field strength, - theta is the angle between the velocity of the particle and the magnetic field. The magnitude of the magnetic force can be calculated using the above formula. The direction of the force can be determined using the right-hand rule, where you point your thumb in the direction of the velocity of the charged particle, your index finger in the direction of the magnetic field, and the force will be in the direction of your middle finger. Therefore, the magnetic force on a moving charged particle and the expression for its magnitude and direction provide insight into the behavior of charged particles in magnetic fields."
            },
            {
                "key": 267,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "In the context of the nervous system, explain how the concept of action potential can be compared to the principles of electrostatics. Discuss the role of ion channels and membrane potential in the generation and propagation of action potentials in neurons.",
                "solution": "In the context of the nervous system, action potential can be compared to the principles of electrostatics as both involve the movement of charged particles, in this case ions, across a membrane. Ion channels play a crucial role in the generation and propagation of action potentials in neurons. These channels allow specific ions to flow across the cell membrane, creating changes in membrane potential. During an action potential, there is a rapid change in membrane potential as sodium ions enter the cell, causing depolarization. This is followed by the exit of potassium ions, leading to repolarization and hyperpolarization. The movement of ions through ion channels is essential for the transmission of electrical signals along the neuron, ultimately resulting in the communication between neurons and the rest of the body."
            },
            {
                "key": 116,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "In a friction experiment, a block of mass 2 kg is placed on a rough horizontal surface with a coefficient of friction of 0.4. A force of 20 N is applied on the block horizontally. Calculate the acceleration of the block and the frictional force acting on it. Take g 9.8 ms.",
                "solution": "Given data Mass of block m 2 kg Coefficient of friction 0.4 Applied force F 20 N Acceleration due to gravity g 9.8 ms 1. Calculate the frictional force Ffriction Frictional force Ffriction Normal force Normal force mass gravity 2 kg 9.8 ms 19.6 N Ffriction 0.4 19.6 N 7.84 N 2. Calculate the net force Fnet acting on the block Fnet Applied force - Frictional force Fnet 20 N - 7.84 N 12.16 N 3. Calculate the acceleration a of the block Fnet mass acceleration 12.16 N 2 kg acceleration Acceleration a 12.16 N 2 kg 6.08 ms Therefore, the acceleration of the block is 6.08 ms and the frictional force acting on it is 7.84 N."
            },
            {
                "key": 56,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain in detail the concept of kinetic friction and static friction, including factors that affect them and how they can be calculated in real-life scenarios. Give examples to demonstrate your understanding of the topic.",
                "solution": "Kinetic friction is the friction that exists between two objects in motion relative to each other. It opposes the motion of the objects and is dependent on factors like the nature of the surfaces and the force pressing them together. The formula to calculate kinetic friction is Fk k N, where Fk is the force of kinetic friction, k is the coefficient of kinetic friction, and N is the normal force. Static friction, on the other hand, is the friction that prevents two stationary objects from moving relative to each other. It is also dependent on the nature of the surfaces and the force pressing them together. The formula to calculate static friction is Fs s N, where Fs is the force of static friction, s is the coefficient of static friction, and N is the normal force. Factors affecting kinetic friction and static friction include the roughness of the surfaces, the normal force pressing the surfaces together, and the type of materials involved. In real-life scenarios, these frictional forces can be calculated using the given formulas based on the specifics of the situation. For example, when a book is pushed across a table, kinetic friction comes into play to resist the motion. The coefficient of kinetic friction between the book and the table determines the force required to move the book at a constant speed. Similarly, when a heavy box is placed on the floor, static friction prevents it from sliding. Understanding the concepts of kinetic and static friction and how to calculate them is essential in various real-life situations, such as designing machinery, determining the stopping distance of vehicles, and preventing objects from slipping or sliding."
            },
            {
                "key": 93,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Define the term 'refraction of light'. Can you explain how a ray of light bends when it passes from a rarer medium to a denser medium?",
                "solution": "Refraction of light is the change in direction of light as it passes from one medium to another, due to the change in the speed of light. When a ray of light passes from a rarer medium to a denser medium, such as air to glass, the ray of light bends towards the normal. The normal is an imaginary line perpendicular to the surface of the interface between the two mediums. This bending occurs because light travels at different speeds in different mediums. In this case, light travels faster in the rarer medium air and slower in the denser medium glass. The change in speed causes the light to bend towards the normal. This bending of light is governed by Snell's Law, which states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is equal to the ratio of the speeds of light in the two mediums. The formula for Snell's Law is nsin nsin Where n Refractive index of the rarer medium n Refractive index of the denser medium Angle of incidence Angle of refraction In conclusion, when a ray of light passes from a rarer medium to a denser medium, it bends towards the normal due to the change in speed of light in different mediums."
            },
            {
                "key": 152,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of P-type semiconductor and N-type semiconductor in the context of semiconductor electronics.",
                "solution": "P-type semiconductor A P-type semiconductor is created by adding a small amount of trivalent impurity atoms e.g. Boron to a pure semiconductor material e.g. Silicon. These trivalent atoms have one less electron in their outermost shell, creating holes or positive charge carriers in the crystal lattice. This results in the formation of P-type semiconductor material with excess positive charges. N-type semiconductor An N-type semiconductor is created by doping a pure semiconductor material e.g. Silicon with pentavalent impurity atoms e.g. Phosphorus, which have one extra electron in their outermost shell. This extra electron becomes a negative charge carrier in the crystal lattice, resulting in the formation of N-type semiconductor material with excess negative charges. In the context of semiconductor electronics, P-type and N-type semiconductors are used to form P-N junctions and various electronic devices like diodes and transistors, where the interaction between these types of materials plays a crucial role in controlling the flow of current."
            },
            {
                "key": 301,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the purpose of a modulator in a communication system?",
                "solution": "In a communication system, the purpose of a modulator is to modify a carrier signal in such a way that it can effectively carry the information being transmitted. This is done by combining the carrier signal with the information signal, which could be voice, video, or data, in order to create a modulated signal that can be transmitted efficiently over a communication channel. The modulator essentially helps in encoding the information onto the carrier signal for reliable and accurate transmission."
            },
            {
                "key": 139,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain how a charged particle moving in a magnetic field experiences a deflecting force. Include the relationship between the force experienced, magnetic field strength, charge of the particle, velocity of the particle, and angle between velocity and magnetic field direction in your answer.",
                "solution": "When a charged particle moves in a magnetic field, it experiences a deflecting force known as the magnetic force. This force is perpendicular to both the velocity of the particle and the magnetic field direction. The magnitude of the magnetic force is given by the formula F qvBsin, where F is the force, q is the charge of the particle, v is the velocity of the particle, B is the magnetic field strength, and is the angle between the velocity and magnetic field direction. Therefore, the force experienced by a charged particle moving in a magnetic field depends on the strength of the magnetic field, the charge of the particle, the velocity of the particle, and the angle between the velocity and the magnetic field direction."
            },
            {
                "key": 138,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "How does the presence of unpaired electrons in transition metal ions contribute to their magnetic properties? Explain with suitable examples.",
                "solution": "Transition metal ions with unpaired electrons exhibit magnetic properties due to their magnetic moments. The presence of unpaired electrons causes the magnetic moments to align in the same direction, leading to paramagnetic behavior. For example, consider the transition metal ion Copper II ion Cu2. Copper has two unpaired electrons in its d orbital. These unpaired electrons align their magnetic moments in the same direction, making Cu2 ion paramagnetic. Similarly, another example is the Iron II ion Fe2. Iron possesses four unpaired electrons in its d orbital, resulting in a stronger magnetic moment compared to Cu2 ion. Thus, Fe2 ion exhibits paramagnetic behavior due to the alignment of its unpaired electron magnetic moments. In conclusion, the presence of unpaired electrons in transition metal ions contributes to their magnetic properties by causing alignment of magnetic moments and exhibiting paramagnetic behavior."
            },
            {
                "key": 162,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of PN junction in semiconductor devices and discuss how it acts as a barrier to the flow of current.",
                "solution": "Answer A PN junction is formed when a P-type semiconductor is in close contact with an N-type semiconductor. In a PN junction, the P-side has excess holes positive charge carriers while the N-side has excess electrons negative charge carriers. When the two semiconductors are brought together, electrons from the N-side diffuse to the P-side and combine with the holes. This creates a region near the junction where positive and negative charges recombine, forming a depletion region without any charge carriers. This depletion region acts as a barrier to the flow of current because it creates an electric field that opposes the movement of any further charge carriers across the junction. When no external voltage is applied, this barrier prevents the flow of current. In summary, the PN junction in semiconductor devices acts as a barrier to the flow of current due to the formation of a depletion region with an electric field that opposes the movement of charge carriers across the junction."
            },
            {
                "key": 211,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the primary function of a transducer in a communication system?",
                "solution": "Primary function of a transducer in a communication system is to convert one form of energy into another form. In the context of communication systems, a transducer converts the variations in the physical quantity of the signal into an electrical signal and vice versa. This allows the signal to be transmitted through different mediums and facilitates effective communication between sender and receiver."
            },
            {
                "key": 290,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "In the process of nuclear fission, a uranium-235 nucleus is bombarded with a neutron, resulting in the formation of two fission products, additional neutrons, and a significant release of energy. Explain the concept of nuclear fission and discuss its applications in nuclear power plants.",
                "solution": "Nuclear fission is a nuclear reaction in which the nucleus of an atom is split into smaller nuclei along with the release of energy. In the process, a uranium-235 nucleus is bombarded with a neutron, leading to the formation of fission products, extra neutrons, and a substantial energy release. This chain reaction continues, producing more energy and more neutrons. In nuclear power plants, nuclear fission is utilized to generate electricity. The heat produced by the fission process is used to convert water into steam, which drives turbines connected to generators, ultimately producing electricity. This method of power generation is efficient, produces large amounts of energy, and has low greenhouse gas emissions, making it a reliable source of clean energy. Overall, nuclear fission is a key process in nuclear power plants, providing a sustainable and powerful source of electricity with minimal environmental impact."
            },
            {
                "key": 261,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the working of the human ear in detecting and interpreting sound waves. How does the structure of the ear contribute to its sensitivity and ability to distinguish different frequencies of sound?",
                "solution": "The human ear is a complex organ responsible for detecting and interpreting sound waves. Sound waves enter the outer ear and travel through the ear canal to reach the eardrum. The eardrum vibrates in response to the sound waves, which are then transmitted through the middle ear by a chain of small bones hammer, anvil, and stirrup. These vibrations are then transferred to the fluid-filled cochlea in the inner ear. The cochlea is lined with hair cells that are sensitive to different frequencies of sound. When the hair cells are stimulated by the vibrations, they send electrical impulses to the brain via the auditory nerve, which interprets the signals as sound. The structure of the ear contributes to its sensitivity and ability to distinguish different frequencies of sound in several ways. The shape of the outer ear helps in collecting and funneling sound waves towards the eardrum, enhancing its efficiency. The middle ear's amplification mechanism increases the intensity of sound waves before reaching the inner ear. The cochlea's structure, with its hair cells arranged in a specific pattern, allows for the detection of different frequencies of sound. Different frequencies cause specific hair cells to vibrate, enabling us to distinguish between high and low-pitched sounds. Overall, the human ear's intricate structure and the coordinated functioning of its various parts enable us to perceive and interpret a wide range of sound frequencies with remarkable sensitivity and accuracy."
            },
            {
                "key": 151,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the role of hormones in communication within the human body? Provide an example of a hormone and explain how it helps in maintaining homeostasis.",
                "solution": "Hormones play a crucial role in communication within the human body by acting as chemical messengers. They are secreted by various glands and travel through the bloodstream to target cells or organs where they regulate specific physiological processes. One example of a hormone is insulin, which is produced by the pancreas. Insulin helps in maintaining blood glucose levels within a specific range by promoting the uptake of glucose from the blood into cells for energy production or storage. This process ensures that the body maintains homeostasis, a stable internal environment necessary for physiological functions to occur optimally. In conclusion, hormones are essential for communication within the human body and help in regulating various processes to maintain internal balance."
            },
            {
                "key": 164,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain the concept of interference patterns produced by a double slit experiment in the context of wave optics. How does the spacing between the slits affect the interference pattern observed on the screen? Justify your answer with relevant examples.",
                "solution": "Interference patterns in a double-slit experiment are based on the principle of wave interference. When light passes through the two slits, it forms two coherent sources that produce wavefronts interacting with each other. This results in alternating bright and dark fringes on the screen where light waves reinforce constructive interference or cancel out destructive interference each other. The spacing between the slits affects the interference pattern observed on the screen. Wider slit spacing leads to a wider separation between fringes and vice versa. This is due to the difference in path lengths traveled by the light waves from each slit to the screen. With narrower slit spacing, the path length difference decreases, resulting in closer fringes on the screen. For example, in the case of Young's double-slit experiment, when the slits are closer together, the interference pattern will have closely spaced fringes on the screen. On the other hand, if the slits are farther apart, the fringes will be more widely spaced. In conclusion, the spacing between the slits directly affects the interference pattern observed in a double-slit experiment, with wider slit spacing leading to wider fringe separations and narrower slit spacing resulting in closer fringes on the screen."
            },
            {
                "key": 148,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of magnetic hysteresis and how it is relevant in the context of magnetic materials. How does it affect the performance of devices such as transformers and magnetic storage media?",
                "solution": "Concept of magnetic hysteresis deals with the lagging of magnetization behind the applied magnetic field. In magnetic materials, when subjected to an external magnetic field and then the field is removed, the material retains some magnetization due to hysteresis. This phenomenon is crucial for magnetic materials as it determines their efficiency and performance. In devices like transformers, magnetic hysteresis can lead to energy losses in the form of heat due to the magnetic domains taking time to realign with the changing magnetic field. This can reduce the efficiency of the transformer. In magnetic storage media like hard drives, magnetic hysteresis ensures that data remains stored even when the power is turned off. However, it also sets limits on how much data can be stored and how quickly it can be accessed due to the time taken for magnetization to change. Overall, understanding and managing magnetic hysteresis is important in designing efficient and reliable devices using magnetic materials."
            },
            {
                "key": 172,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain in detail the working principle of a photodiode and discuss its application in semiconductor electronics.",
                "solution": "Working Principle of a Photodiode A photodiode is a semiconductor device that converts light into an electrical signal. When light strikes the photodiode, it generates electron-hole pairs due to the absorption of photons. These electron-hole pairs create a current flow in the reverse bias condition of the photodiode. The current produced is directly proportional to the amount of light falling on the photodiode. Application in Semiconductor Electronics Photodiodes are extensively used in various applications in semiconductor electronics due to their ability to convert light into an electrical signal. Some common applications include 1. Optical Communication Photodiodes are used in optical communication systems to receive optical signals and convert them into electrical signals for processing and transmission. 2. Light Detection They are used in light sensors for automatic light adjustment in cameras, smartphones, streetlights, etc. 3. Remote Control Devices Infrared photodiodes are used in remote controls to receive signals from the remote control unit and transmit them to the electronic device. 4. Medical Devices Photodiodes find applications in medical devices like pulse oximeters for measuring oxygen saturation levels in blood. 5. Burglar Alarms They are used in burglar alarms to detect intruders by sensing changes in light levels. In conclusion, photodiodes play a crucial role in semiconductor electronics by converting light into electrical signals in a wide range of applications."
            },
            {
                "key": 166,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Explain the role of friction in the human body, giving examples of how friction is both beneficial and detrimental to various physiological processes.",
                "solution": "Friction plays a crucial role in the human body in various physiological processes. It provides stability and prevents slippage while walking or running, ensuring smooth movement. For example, when we walk, the friction between our feet and the ground helps us maintain balance and prevents us from slipping. However, excessive friction can also be detrimental. For instance, friction between bones in joints can lead to wear and tear, causing conditions like arthritis. Moreover, excessive friction between blood vessels and blood cells can lead to cardiovascular problems such as high blood pressure. In conclusion, friction in the human body is essential for maintaining stability and facilitating movement but can also lead to negative consequences if not balanced properly."
            },
            {
                "key": 345,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "In the context of the universe, explain the concept of cosmic microwave background radiation and its significance in understanding the early universe. How has the discovery of this radiation influenced our understanding of the Big Bang theory?",
                "solution": "The cosmic microwave background radiation is the residual radiation from the Big Bang, which occurred approximately 13.8 billion years ago. This radiation is spread evenly throughout the universe and is at a temperature of about 2.7 Kelvin. It is crucial in understanding the early universe because it represents the moment when the universe cooled down enough for neutral atoms to form, allowing light to travel freely. The discovery of this radiation has greatly influenced our understanding of the Big Bang theory by providing strong evidence to support it. The uniformity and isotropy of the cosmic microwave background radiation confirm the predictions of the Big Bang theory, such as the rapid expansion of the universe from a hot and dense state. Additionally, the fluctuations in the radiation's temperature across the sky provide valuable insights into the structure and composition of the early universe. In conclusion, the cosmic microwave background radiation is a vital piece of evidence that supports the Big Bang theory and helps us unravel the mysteries of the early universe."
            },
            {
                "key": 52,
                "class": "CBSE 10th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of N-type and P-type semiconductors with the help of energy band diagrams and discuss how a PN junction is formed. Include the role of majority and minority charge carriers in the functioning of a PN junction.",
                "solution": "In a PN junction, a P-type semiconductor has an excess of holes positive charge carriers due to the presence of acceptor impurities, leading to a filled valence band and an empty conduction band. On the other hand, an N-type semiconductor has an excess of electrons negative charge carriers due to the presence of donor impurities, resulting in a partially filled valence band and a filled conduction band. When a PN junction is formed by bringing together the P-type and N-type semiconductors, electrons from the N-side diffuse across the junction into the P-side, recombining with the holes. This creates a depletion region devoid of majority charge carriers near the junction. This process results in the formation of an electric field at the junction, preventing further diffusion of majority carriers. The role of majority carriers electrons in N-type and holes in P-type is to establish the initial charge imbalance before the PN junction is formed. The role of minority carriers holes in N-type and electrons in P-type becomes significant in the functioning of the PN junction, as they drift across the junction due to the built-in electric field, resulting in the flow of current when the PN junction is under forward bias. In summary, the concept of N-type and P-type semiconductors, along with the formation and functioning of a PN junction, are crucial aspects of semiconductor electronics that govern the behavior of electronic devices like diodes and transistors."
            },
            {
                "key": 113,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "A concave mirror has a radius of curvature of 20 cm. An object is placed 15 cm in front of the mirror. Calculate the position and nature of the image formed by the mirror, considering all possible cases.",
                "solution": "For a concave mirror with a radius of curvature of 20 cm 1. When the object is placed 15 cm in front of the mirror between F and C Focal length f R2 20 cm 2 10 cm Given object distance u -15 cm Using the mirror formula 1f 1v 1u Substitute the values 110 1v 1-15 Solving, we get image distance v -30 cm Since the image distance is negative, the image is formed on the same side as the object, making it a virtual image. 2. When the object is placed at the focus F In this case, u -10 cm Using the mirror formula 110 1v 1-10 Solving, we get 1v 0, which means the image is formed at infinity. 3. When the object is placed between F and the mirror In this case, the object distance is less than the focal length. For example, if the object is placed at 5 cm from the mirror Using the mirror formula 110 1v 15 Solving, we get v 10 cm Since the image distance is positive, the image is real and formed on the opposite side of the mirror as the object. Thus, in all possible cases, the position and nature of the image formed by the concave mirror with the given radius of curvature are 1. When the object is between F and C Virtual and upright, formed at 30 cm from the mirror. 2. When the object is at F Image is at infinity. 3. When the object is between F and the mirror Real and inverted, formed at a distance greater than the focal length."
            },
            {
                "key": 135,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Hubble constant and how it helps us understand the expansion of the universe. What is the significance of the Hubble constant in the field of cosmology?",
                "solution": "The Hubble constant, denoted by H0, is a value that represents the rate at which the universe is expanding. It helps us understand the expansion of the universe by providing a measure of how fast galaxies are moving away from each other. This constant is essential in determining the age, size, and future fate of the universe. In the field of cosmology, the Hubble constant plays a crucial role as it allows scientists to estimate the age of the universe, the rate of expansion, and the overall geometry of space-time. By observing the redshift of distant galaxies, researchers can use the Hubble constant to infer the distance and speed at which these galaxies are moving away from us. Overall, the Hubble constant is significant in cosmology as it provides a foundational understanding of the universe's expansion and helps unravel the mysteries of our cosmic origins and evolution."
            },
            {
                "key": 156,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "In the context of biology, explain how friction plays a role in biological systems and its importance in various physiological processes in living organisms.",
                "solution": "In biological systems, friction plays a crucial role in various physiological processes in living organisms. For instance, friction between bones at joints allows movement and flexibility. It also helps in providing traction and grip while walking or holding objects. Moreover, the friction between muscles and bones enables muscle contraction and mobility. Friction is essential for functions like blood circulation, as the friction between blood and the walls of blood vessels helps in maintaining blood flow. In the respiratory system, the friction between air and the respiratory passages facilitates the exchange of gases during breathing. Without friction, these physiological processes would not function efficiently, leading to potential health issues. In conclusion, friction in biological systems ensures the smooth functioning of various physiological processes, making it a critical component for the survival and well-being of living organisms."
            },
            {
                "key": 137,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric field lines and their properties in the context of electrostatics. How are electric field lines useful in representing the strength and direction of an electric field?",
                "solution": "Electric field lines are an important concept in the study of electrostatics. They are imaginary lines used to represent the direction of the electric field at different points around a charged object. Properties of electric field lines 1. They start on positive charges and end on negative charges. 2. They never cross each other. 3. They are closer together where the field is stronger and farther apart where it is weaker. Electric field lines are useful in representing the strength and direction of an electric field because 1. The direction of the electric field at a point is tangent to the field line passing through that point. 2. The density of the lines indicates the strength of the field - more lines per unit area means a stronger field, and vice versa. 3. The pattern of the electric field lines can give a visual representation of the overall configuration of the electric field, making it easier to analyze. In conclusion, electric field lines provide a visual and intuitive way to understand the behavior of electric fields in a given situation, aiding in the interpretation of their strength and direction."
            },
            {
                "key": 145,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "Can you explain how the abundance of elements in the universe can be determined using the concept of spectroscopy and the observations of the cosmic microwave background radiation? Provide examples to support your explanation.",
                "solution": "To determine the abundance of elements in the universe, spectroscopy can be utilized. The concept involves studying the light emitted or absorbed by elements to identify their composition. When observing the cosmic microwave background radiation, which is the remnants of the Big Bang, particular patterns in the light spectrum can reveal the abundance of elements present in the early universe. For example, the presence of hydrogen and helium in the universe can be deduced by analyzing the specific absorption and emission lines in the cosmic microwave background radiation spectrum. These lines correspond to the unique energy levels of the atoms of these elements. By comparing these observed patterns with known data from spectroscopic analysis of elements on Earth, scientists can infer the relative abundance of elements in the universe. In summary, spectroscopic analysis of the cosmic microwave background radiation provides crucial insights into the abundance of elements in the universe by identifying the characteristic patterns in the light spectrum corresponding to different elements."
            },
            {
                "key": 186,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Explain the difference between static friction and kinetic friction with an example from daily life.",
                "solution": "Static friction is the friction that opposes the initial motion of an object at rest, while kinetic friction is the friction that opposes the motion of an object already in motion. Example A common example of static friction is when you try to push a heavy box on the floor. Initially, the box resists the motion due to static friction. Once you overcome the static friction and the box starts moving, the kinetic friction comes into play to oppose the motion of the box on the floor."
            },
            {
                "key": 147,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "Calculate the work done in moving a test charge of 3 C from point A to point B in an electric field where the potential difference between the two points is 100 V. Given that the charge of an electron is -1.6 x 10-19 C.",
                "solution": "The work done in moving a test charge q through a potential difference V is given by the formula W qV Where - W Work done - q Test charge in coulombs - V Potential difference in volts Given - Test charge, q 3 C - Potential difference, V 100 V Therefore, substituting the values in the formula W 3 C times 100 V W 300 J Therefore, the work done in moving a test charge of 3 C from point A to point B in an electric field with a potential difference of 100 V is 300 Joules."
            },
            {
                "key": 146,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "In the context of friction, explain the difference between static friction and kinetic friction, and how they vary based on the surfaces in contact. Provide real-world examples to support your explanation.",
                "solution": "Static friction occurs between stationary surfaces, preventing motion from initiating, whereas kinetic friction is the force resisting the relative motion between two surfaces in contact. The magnitude of static friction is typically higher than kinetic friction as it needs to be overcome to initiate motion. For surfaces with irregularities or microstructures, static friction is usually higher as there is more area in contact. On the other hand, kinetic friction is generally constant across different surfaces as it involves the sliding motion itself. For instance, when a heavy box is stationary on a rough floor, static friction acts to keep it in place. Once you start pushing the box, overcoming the static friction, kinetic friction takes over to oppose the motion. On smooth surfaces like ice, static friction decreases significantly, making it easier to initiate motion compared to rough surfaces. Understanding the difference between static and kinetic friction is crucial in various real-world scenarios like driving on different road surfaces, pushing heavy objects, or in industrial machinery where friction plays a significant role."
            },
            {
                "key": 284,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "In a double-slit experiment, monochromatic light of wavelength 500 nm is used. The distance between the slits is 0.2 mm and the screen is placed 1 m away. If the first-order bright fringe is observed at an angle of 30 degrees, calculate the distance between the central bright fringe and the first-order bright fringe on the screen. Assume the screen is at a large distance compared to the slit separation. Hint Use the formula for fringe width in the double-slit interference pattern",
                "solution": "Fringe width in a double-slit interference pattern is given by the formula beta fraclambda Dd , where Fringe width Wavelength of light 500 nm 500 10-9 m D Distance between the slits 0.2 mm 0.2 10-3 m d Distance between screen and the slits 1 m Given that the first-order bright fringe is observed at an angle of 30 degrees, the distance between the central bright fringe and the first-order bright fringe on the screen is half the fringe width. Substitute the given values into the formula beta frac500 times 10-9 times 10.2 times 10-3 2.5 times 10-3 m . Therefore, the distance between the central bright fringe and the first-order bright fringe on the screen is 2.5 times 10-3 m ."
            },
            {
                "key": 140,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear binding energy and its significance in the stability of an atomic nucleus. How does the binding energy per nucleon change with increasing atomic number? Use appropriate examples to support your explanation.",
                "solution": "Nuclear binding energy is the energy required to separate the nucleus of an atom into its individual protons and neutrons. It plays a critical role in determining the stability of an atomic nucleus. The higher the binding energy per nucleon, the more stable the nucleus is. As the atomic number increases, the binding energy per nucleon initially increases due to the increasing nuclear forces that hold the nucleus together. However, beyond a certain point, the repulsive forces between protons begin to outweigh the attractive forces, causing the binding energy per nucleon to decrease. For example, let's consider the isotopes of hydrogen and helium. Hydrogen-1 has the highest binding energy per nucleon among all isotopes while helium-4 has the highest binding energy per nucleon among all elements. This demonstrates that the stability of the nucleus increases with higher binding energy per nucleon. In conclusion, nuclear binding energy is crucial for maintaining the stability of atomic nuclei, and understanding how it changes with increasing atomic number helps to explain the behavior of different elements and isotopes."
            },
            {
                "key": 141,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems and discuss the importance of modulation in transmitting information effectively over long distances. Include relevant examples to support your explanation.",
                "solution": "Modulation in communication systems involves the process of varying one or more properties of a periodic waveform, known as the carrier signal, with the help of a message signal. This process allows us to embed the message signal within the carrier signal so that it can be transmitted efficiently. The importance of modulation in transmitting information effectively over long distances lies in its ability to overcome various challenges such as attenuation, noise, and interference. Modulation helps in amplifying the signal to overcome attenuation, filtering out noise to improve signal quality, and differentiating the signal from other signals to minimize interference. For example, in amplitude modulation AM, the amplitude of the carrier signal is varied in accordance with the varying intensity of the message signal. This helps in increasing the signal strength, making it less susceptible to attenuation over long distances. In frequency modulation FM, the frequency of the carrier signal is altered based on the variations in the message signal, resulting in a signal that is more resistant to noise and interference. In summary, modulation plays a crucial role in communication systems by enabling effective transmission of information over long distances through techniques like amplitude and frequency modulation, which enhance signal strength, quality, and resistance to interference and noise."
            },
            {
                "key": 163,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain how the phenomenon of total internal reflection occurs in ray optics and provide an example of its practical application in everyday life.",
                "solution": "Total internal reflection occurs when a light ray traveling from a denser medium to a rarer medium is incident at an angle greater than the critical angle. At this critical angle, the refracted ray lies along the interface between the two mediums. The phenomenon happens because the angle of refraction would be greater than 90 degrees, making it impossible for the light to pass to the rarer medium. An everyday example of total internal reflection can be seen in fiber optics used in telecommunications. In fiber optics, light signals travel through a glass or plastic fiber by repeatedly undergoing total internal reflection. This allows for the transmission of light signals over long distances without significant loss of signal strength, making it an essential technology in the telecommunications industry."
            },
            {
                "key": 189,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the direction of the magnetic force experienced by a positively charged particle moving perpendicular to a magnetic field?",
                "solution": "When a positively charged particle moves perpendicular to a magnetic field, the direction of the magnetic force experienced by the particle can be determined using the right-hand rule. According to the right-hand rule, if we point the thumb of our right hand in the direction of the velocity of the positively charged particle and the fingers in the direction of the magnetic field, then the palm of our hand represents the direction of the magnetic force acting on the particle. Therefore, for a positively charged particle moving perpendicular to a magnetic field, the direction of the magnetic force experienced by the particle is perpendicular to both the velocity of the particle and the magnetic field, following the right-hand rule. Hence, the magnetic force experienced by a positively charged particle moving perpendicular to a magnetic field will be perpendicular to both the velocity of the particle and the direction of the magnetic field."
            },
            {
                "key": 242,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Define the term 'Semiconductor' and provide an example of a common semiconductor material used in electronic devices.",
                "solution": "A semiconductor is a material that has electrical conductivity between that of a conductor and an insulator. For example, a common semiconductor material used in electronic devices is silicon. Silicon is widely used in the production of electronic components such as diodes, transistors, and integrated circuits due to its unique electrical properties. Hope this helps!"
            },
            {
                "key": 276,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "A block of mass 5 kg is placed on a rough horizontal surface. The coefficient of static friction between the block and the surface is 0.4. What is the maximum force that can be applied horizontally to start the block moving?",
                "solution": "The maximum force that can be applied horizontally to start the block moving can be calculated using the formula for static friction. The formula for static friction is given by ftextstatic mutextstatic times N, Where ftextstatic maximum force of static friction, mutextstatic coefficient of static friction given as 0.4, N normal force equal to the weight of the block, which is m times g. Substitute the values into the formula ftextstatic 0.4 times 5 times 9.8 taking g as 9.8 ms ftextstatic 0.4 times 49 ftextstatic 19.6 N. Therefore, the maximum force that can be applied horizontally to start the block moving is 19.6 N."
            },
            {
                "key": 144,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "In Young's double-slit experiment, if the distance between the slits is increased, how will it affect the fringe pattern observed on the screen? Justify your answer using the concept of path difference and interference.",
                "solution": "When the distance between the slits in Young's double-slit experiment is increased, the fringe pattern observed on the screen will show a decrease in the fringe width. This is because an increased distance between the slits will result in a larger path difference between the two interfering waves reaching the screen. In the concept of interference, the path difference is crucial. When light waves from two slits interfere constructively or destructively, the path difference determines the outcome. A larger path difference results in a phase shift between the waves, thereby affecting the interference pattern observed on the screen. Therefore, by increasing the distance between the slits, the path difference between the interfering waves increases, leading to a decrease in the fringe width observed on the screen. This phenomenon can be justified using the concept of path difference and interference in the context of Young's double-slit experiment in wave optics."
            },
            {
                "key": 169,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "How does the magnetic force on a moving charge vary with the velocity of the charge? Explain your answer with the help of relevant equations and principles from the Moving Charge and Magnetism chapter in Biology.",
                "solution": "In the Moving Charge and Magnetism chapter of Biology, the magnetic force on a moving charge can be calculated using the equation F qvBsin Where F magnetic force on the charge N q charge of the particle C v velocity of the charge ms B magnetic field strength T angle between the velocity vector and the magnetic field vector From the equation, we can see that the magnetic force on a moving charge is directly proportional to the velocity of the charge. This means that as the velocity of the charge increases, the magnetic force on the charge also increases. Therefore, the magnetic force on a moving charge varies directly with the velocity of the charge."
            },
            {
                "key": 321,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems and discuss the advantages of using modulation techniques such as Amplitude Modulation AM and Frequency Modulation FM in transmitting signals over long distances. Include detailed examples to support your answer.",
                "solution": "Modulation in communication systems is the process of varying the characteristic of a carrier signal in accordance with the message signal. This helps in enabling the transmission of the message signal over long distances more effectively. Advantages of using modulation techniques like Amplitude Modulation AM and Frequency Modulation FM include - Improved signal quality and reduced interference - Better signal reception in varying environmental conditions - Efficient use of bandwidth allowing for multiple signals to be transmitted simultaneously For example, AM modulation is commonly used in commercial broadcast radio. The audio signal modulates the amplitude of the carrier wave which is then transmitted. On the other hand, FM modulation is widely used in high-fidelity music transmission due to its resistance to amplitude variations and noise. In conclusion, modulation techniques such as AM and FM play a vital role in ensuring efficient and effective communication over long distances by enhancing signal quality and minimizing interference."
            },
            {
                "key": 260,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "How does the process of radioactive decay differ in alpha, beta, and gamma emissions in terms of particle composition and penetration power? Provide examples of isotopes that exhibit each type of decay.",
                "solution": "1. Alpha Decay - In alpha decay, an alpha particle composed of 2 protons and 2 neutrons is emitted from the nucleus. - Alpha particles have a relatively low penetration power and can be stopped by a sheet of paper or human skin. - Example Uranium-238 U-238 undergoes alpha decay to form Thorium-234 Th-234. 2. Beta Decay - In beta decay, a beta particle an electron or positron is emitted from the nucleus. - Beta particles have a higher penetration power than alpha particles but can be stopped by a few millimeters of aluminum. - Example Carbon-14 C-14 undergoes beta decay to form Nitrogen-14 N-14. 3. Gamma Decay - In gamma decay, a gamma ray is emitted from the nucleus. - Gamma rays have the highest penetration power and can penetrate several centimeters of lead or concrete. - Example Cobalt-60 Co-60 undergoes gamma decay to form Nickel-60 Ni-60. In summary, alpha decay involves the emission of an alpha particle with low penetration power, beta decay involves the emission of a beta particle with higher penetration power, and gamma decay involves the emission of a gamma ray with the highest penetration power."
            },
            {
                "key": 297,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "A point charge of 5 C is placed at the origin. Calculate the electric field strength at a distance of 10 cm along the x-axis from the charge.",
                "solution": "Given - Point charge, q 5 C - Distance from charge, r 10 cm 0.1 m We need to calculate the electric field strength at a distance of 10 cm along the x-axis from the charge. Electric Field Strength E due to a point charge is given by the formula E k q r2 Where k Coulomb's constant 8.9875 x 109 Nm2C2 q charge 5 C r distance 0.1 m Substitute the given values into the formula E 8.9875 x 109 5 0.12 E 8.9875 x 109 5 0.01 E 8.9875 x 109 500 E 4.49375 x 1012 NC Therefore, the electric field strength at a distance of 10 cm along the x-axis from the charge is 4.49375 x 1012 NC."
            },
            {
                "key": 191,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of bandwidth in the context of communication systems and how it is related to the data transmission capacity of a communication channel.",
                "solution": "Bandwidth in communication systems refers to the range of frequencies that can be transmitted over a communication channel. It is typically measured in hertz Hz and represents the capacity of a channel to carry data effectively. The relationship between bandwidth and data transmission capacity can be understood through the Nyquist theorem and the Shannon theorem. According to the Nyquist theorem, the maximum data rate of a communication channel is twice the bandwidth of the channel. This implies that a wider bandwidth allows for higher data transmission rates. Similarly, the Shannon theorem states that the maximum data rate of a communication channel is directly proportional to the bandwidth and the logarithm of the signal-to-noise ratio of the channel. Therefore, a larger bandwidth leads to higher data transmission capacity by allowing more information to be transmitted simultaneously. In conclusion, the concept of bandwidth plays a crucial role in determining the data transmission capacity of a communication channel. A wider bandwidth enables higher data rates and facilitates efficient communication systems."
            },
            {
                "key": 218,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Define diamagnetic substances and provide an example of a diamagnetic material commonly found in nature.",
                "solution": "Diamagnetic substances are those materials that do not have any unpaired electrons in their atoms. When placed in an external magnetic field, diamagnetic substances create a weak magnetic field in the opposite direction of the applied field. This leads to the repulsion of the material from the magnetic field. Example of a diamagnetic material commonly found in nature One common example of a diamagnetic material found in nature is bismuth. Bismuth is a naturally occurring element that exhibits diamagnetic properties due to the absence of unpaired electrons in its atomic structure."
            },
            {
                "key": 109,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A particle of charge 2.0 C moves with a velocity of 3.0 x 105 ms in a magnetic field of magnitude 0.5 T directed perpendicular to its velocity. Calculate the magnitude and direction of the magnetic force acting on the particle. Given sin 1, where is the angle between the velocity and magnetic field",
                "solution": "The magnetic force acting on a moving charged particle is given by the formula F qvBsin, where q is the charge of the particle, v is its velocity, B is the magnitude of the magnetic field, and is the angle between the velocity and the magnetic field. Given q 2.0 C v 3.0 x 105 ms B 0.5 T sin 1 Substitute the given values into the formula F 2.0 C 3.0 x 105 ms 0.5 T 1 F 3.0 x 105 N Therefore, the magnitude of the magnetic force acting on the particle is 3.0 x 105 N. Since sin 1, this implies that the angle between the velocity and magnetic field is 90 degrees. The force acts perpendicular to the velocity of the particle and is directed upwards in the direction of the magnetic field. Therefore, the magnitude of the magnetic force is 3.0 x 105 N, and its direction is perpendicular to the velocity of the particle and directed upwards."
            },
            {
                "key": 176,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain the role of friction in the process of muscle contraction and relaxation in the human body at the molecular level.",
                "solution": "Friction plays a crucial role in the process of muscle contraction and relaxation in the human body at the molecular level. In muscle contraction, myosin filaments slide alongside actin filaments, causing the muscle to shorten. This movement is powered by the interaction between myosin heads and actin molecules, creating frictional forces that allow the sliding to occur. During relaxation, the release of calcium ions causes the myosin heads to detach from actin, leading to muscle relaxation. Friction also comes into play in this process, as the movement of molecules within the muscle fibers creates resistance, preventing the muscle from contracting further. In conclusion, friction is essential for the proper functioning of muscle contraction and relaxation in the human body at the molecular level, enabling the intricate movements required for various bodily functions."
            },
            {
                "key": 299,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A charged particle of mass m and charge q is moving with a velocity v in a region where a magnetic field B exists perpendicular to the velocity of the particle. If the particle undergoes a circular motion with a radius R, derive an expression for the radius R in terms of m, q, v, and B.",
                "solution": "When a charged particle moves in a magnetic field, it experiences a magnetic force that acts perpendicular to both the velocity of the particle and the magnetic field direction. This force provides the necessary centripetal force to make the particle move in a circle. The magnetic force experienced by the charged particle is given by the equation F qvB This force provides the centripetal force required to keep the particle in a circular motion. The centripetal force is given by F dfracmv2R Equating the magnetic force to the centripetal force, we get qvB dfracmv2R Solving for R, we get R dfracmvqB Therefore, the radius of the circular path followed by the charged particle in a magnetic field is given by the expression R dfracmvqB ."
            },
            {
                "key": 317,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Two identical metal spheres, each having a charge of 2.0 microcoulombs, are placed 1.0 meter apart in a vacuum. Calculate the magnitude of the electrostatic force between the two spheres. Given the value of the electric constant in a vacuum is 8.99 x 109 N m2C2.",
                "solution": "Given Charge on each sphere, q1 q2 2.0 microcoulombs 2.0 x 10-6 C Distance between the spheres, r 1.0 meter Electric constant in vacuum, k 8.99 x 109 N m2C2 The magnitude of the electrostatic force between the two spheres can be calculated using Coulomb's Law F k q1 q2 r2 Substitute the given values F 8.99 x 1092.0 x 10-62.0 x 10-6 1.02 F 8.99 x 1094 x 10-12 1 F 35.96 x 10-3 F 3.596 x 10-2 N Therefore, the magnitude of the electrostatic force between the two spheres is 3.596 x 10-2 N."
            },
            {
                "key": 165,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Big Bang theory and how it led to the formation of the universe as we know it today. Discuss the key evidence that supports this theory and its significance in understanding the origins of the universe.",
                "solution": "The Big Bang theory is the prevailing cosmological model for the observable universe from the earliest known periods through its subsequent large-scale evolution. This theory states that the universe originated from a singular extremely hot and dense point, and then expanded over time, leading to the formation of all known matter and energy in the cosmos. Key evidence supporting the Big Bang theory includes the cosmic microwave background radiation, which is the relic radiation from the initial hot phase of the universe. The abundance of light elements, such as hydrogen and helium, also aligns with the predictions made by the theory. Additionally, the redshift of galaxies and the overall expansion of the universe provide strong observational evidence for the Big Bang. Understanding the Big Bang theory is crucial in unraveling the origins of the universe and how it has evolved into its current state. By studying this theory, scientists can gain insights into the fundamental processes that govern the cosmos and the formation of galaxies, stars, and planets. It offers a comprehensive framework for explaining the universe's structure, composition, and ultimate fate."
            },
            {
                "key": 153,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Explain the term 'reflection' in the context of Ray Optics. How does reflection of light occur and what are the laws of reflection?",
                "solution": "Reflection in the context of Ray Optics refers to the bouncing back of light when it strikes a surface. Reflection of light occurs when light rays hit a surface and are redirected back into the medium from which they came. The laws of reflection govern this process. The laws of reflection are as follows 1. The angle of incidence is equal to the angle of reflection This means that the angle at which a light ray hits the reflecting surface is equal to the angle at which it is reflected off the surface. 2. The incident ray, the reflected ray, and the normal to the surface at the point of incidence, all lie in the same plane This law states that the incident ray, the reflected ray, and an imaginary line perpendicular to the surface at the point of incidence all lie in the same plane. In summary, reflection in the context of Ray Optics involves the bouncing back of light rays when they strike a surface. This process is governed by the laws of reflection, which state that the angle of incidence is equal to the angle of reflection, and that the incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane."
            },
            {
                "key": 199,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain Faraday's law of electromagnetic induction and discuss how it is applied in the generation of electricity in power plants.",
                "solution": "Faraday's law of electromagnetic induction states that a change in magnetic field through a conductor induces an electromotive force emf in the conductor. This emf creates a current flow in the conductor if the circuit is closed. In power plants, Faraday's law is applied in the generation of electricity using electromagnetic induction principles. This is done by rotating a coil of wire within a magnetic field. As the coil rotates, the magnetic field through the coil changes, inducing an emf according to Faraday's law. This emf creates an electric current in the coil, which can then be used to generate electricity. In summary, Faraday's law of electromagnetic induction is the fundamental principle behind the generation of electricity in power plants using rotating coils within magnetic fields."
            },
            {
                "key": 220,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the difference between an atomic nucleus and an electron cloud in an atom?",
                "solution": "Answer The atomic nucleus is the central core of an atom that contains protons and neutrons, whereas the electron cloud is the region surrounding the nucleus where electrons are found. The nucleus is much smaller in size compared to the electron cloud. Protons and neutrons are present in the nucleus, whereas electrons are found in the electron cloud. The nucleus has a positive charge due to the presence of protons, while the electron cloud is negatively charged due to the presence of electrons. The nucleus is dense and heavy compared to the electron cloud, which is spread out and much lighter."
            },
            {
                "key": 173,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "In the context of ray optics, explain the phenomenon of total internal reflection. Provide an example of its application in a real-life situation and discuss its significance.",
                "solution": "Total internal reflection is a phenomenon that occurs when a ray of light traveling from a denser medium to a rarer medium strikes the interface at an angle greater than the critical angle. In this case, instead of refracting into the second medium, the light ray reflects back into the denser medium. An example of total internal reflection in a real-life situation is the principle behind the working of optical fibers. Optical fibers are used for transmitting data through light signals. When light enters the core of the optical fiber at an angle greater than the critical angle, it undergoes total internal reflection and travels through the fiber without significant loss of signal. The significance of total internal reflection lies in its application in optical devices such as prisms, binoculars, and fiber optics. It allows for the efficient transmission of light over long distances and plays a crucial role in communication technology, medical imaging, and various scientific instruments."
            },
            {
                "key": 192,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the significance of the doping process in semiconductor devices. How does the type and concentration of dopants affect the conductivity of semiconductors?",
                "solution": "Doping in semiconductor devices plays a crucial role in determining their electrical behavior. The significance of the doping process lies in altering the intrinsic properties of semiconductors to make them suitable for specific applications. By introducing impurities into the semiconductor crystal lattice, the conductivity of the material can be modified as per the requirements. The two main types of dopants used are 1. N-Type Dopants Such as Phosphorus or Arsenic, which introduce extra electrons into the crystal structure, leading to an excess of negative charge carriers. This increases the conductivity of the semiconductor. 2. P-Type Dopants Such as Boron or Gallium, which create holes or the absence of electrons in the crystal lattice, allowing for the movement of positive charge carriers. This also enhances the conductivity of the semiconductor. The concentration of dopants determines the number of charge carriers in the semiconductor, thus affecting its conductivity. Higher dopant concentrations result in higher conductivity as there are more charge carriers available for conduction. In conclusion, the doping process and the typeconcentration of dopants are essential factors that influence the conductivity of semiconductors and ultimately determine their functionality in electronic devices."
            },
            {
                "key": 306,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "What is the force that opposes the relative motion between two surfaces in contact called in the context of friction?",
                "solution": "The force that opposes the relative motion between two surfaces in contact is called friction."
            },
            {
                "key": 280,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the fundamental difference between atomic energy and nuclear energy?",
                "solution": "The fundamental difference between atomic energy and nuclear energy lies in their sources and scale of energy production. Atomic energy refers to the energy stored within an atom's nucleus, which is released during a chemical reaction. This energy is primarily harnessed in nuclear power plants to generate electricity on a large scale. On the other hand, nuclear energy refers to the energy released through nuclear reactions, such as fission or fusion. This process involves splitting or combining atomic nuclei to release a significant amount of energy, which is much higher compared to the energy released in chemical reactions. In summary, atomic energy is related to the energy stored within an atom's nucleus, while nuclear energy specifically involves the release of energy through nuclear reactions on a larger scale."
            },
            {
                "key": 133,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of total internal reflection in the context of ray optics. How is the critical angle related to total internal reflection? Provide an example to demonstrate total internal reflection in everyday life.",
                "solution": "Total internal reflection occurs when a ray of light travelling from a denser medium to a rarer medium bounces back into the denser medium instead of refracting out. This phenomenon takes place when the angle of incidence is greater than the critical angle. The critical angle is the angle of incidence at which light is refracted along the interface. The relationship between the critical angle and total internal reflection can be understood as when the angle of incidence is kept greater than the critical angle, total internal reflection occurs. This means that no refraction takes place and light is entirely reflected back into the denser medium. An everyday example of total internal reflection is the mirage effect seen on roads on hot sunny days. The road surface heats up, creating a temperature gradient in the air just above it. When light rays from the sky travel down and reach this heated air layer, they are refracted due to the change in the speed of light in the air. If the angle of incidence is larger than the critical angle, total internal reflection occurs, creating an optical illusion of water on the road. In conclusion, total internal reflection is a fascinating phenomenon in ray optics that occurs when light is reflected back instead of refracting out at the interface of two mediums, with the critical angle playing a crucial role in determining this phenomenon."
            },
            {
                "key": 241,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Define the term hormones and explain how they are involved in communication within the human body.",
                "solution": "Hormones are chemical messengers produced by glands in the endocrine system. They are involved in the communication within the human body by regulating various physiological processes such as growth, metabolism, and reproduction. Hormones are released into the bloodstream and travel to target cells or organs where they bind to specific receptors, triggering a response. This communication system helps coordinate the functions of different organs and tissues in the body. Overall, hormones play a crucial role in maintaining homeostasis and ensuring the proper functioning of the body's systems by transmitting signals and coordinating various physiological processes."
            },
            {
                "key": 142,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of drift and diffusion currents in semiconductor devices. Discuss how these currents affect the overall functioning of a semiconductor device and provide relevant examples to support your answer.",
                "solution": "In semiconductor devices, drift current is the movement of charge carriers due to an applied electric field, whereas diffusion current is the movement of charge carriers from regions of high concentration to low concentration. Drift current occurs when free electrons or holes are accelerated by an electric field, leading to a net flow of charge carriers in a particular direction. Diffusion current, on the other hand, is due to the random movement of charge carriers across a concentration gradient. The overall functioning of a semiconductor device is influenced by both drift and diffusion currents. Drift current helps in achieving a directional movement of charge carriers, which is essential for the operation of devices like transistors. Diffusion current, on the other hand, helps in maintaining a balanced distribution of charge carriers within the device. For example, in a p-n junction diode, the drift current plays a crucial role in creating a depletion region that allows the diode to act as a rectifier. The diffusion current, on the other hand, helps in the recombination of electrons and holes at the junction, leading to the emission of light in an LED. Overall, the interplay between drift and diffusion currents is essential for the proper functioning of semiconductor devices, making them vital components in modern electronics."
            },
            {
                "key": 279,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A proton moves perpendicularly to a magnetic field with a velocity of 2 x 105 ms. If the magnetic field has a magnitude of 0.5 T, calculate the magnetic force acting on the proton. Given the charge of a proton is 1.6 x 10-19 C.",
                "solution": "Given data Charge of a proton, q 1.6 x 10-19 C Velocity of proton, v 2 x 105 ms Magnetic field strength, B 0.5 T To find Magnetic force acting on the proton Magnetic force acting on a charged particle moving perpendicular to a magnetic field is given by the formula F qvB Substitute the given values into the formula F 1.6 x 10-19 2 x 105 0.5 F 1.6 x 10-19 2 x 105 0.5 F 1.6 2 0.5 x 10-195 F 1.6 x 2 x 0.5 x 10-14 F 1.6 x 1 x 10-14 F 1.6 x 10-14 N Therefore, the magnetic force acting on the proton is 1.6 x 10-14 N."
            },
            {
                "key": 175,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "How do the theories of the Big Bang and Steady State explain the origin and evolution of the universe, and what evidence supports each theory?",
                "solution": "The Big Bang theory explains that the universe originated from a single point about 13.8 billion years ago, expanding and cooling over time. The Steady State theory proposes that the universe has always existed in a constant state, with new matter continuously being created to maintain the overall density. Evidence supporting the Big Bang theory includes the cosmic microwave background radiation, which is leftover radiation from the early universe, the redshift of galaxies indicating an expanding universe, and the abundance of light elements like hydrogen and helium matching the predictions of the theory. On the other hand, evidence for the Steady State theory is limited, as it has largely been discredited due to lack of supporting evidence such as the discovery of the cosmic microwave background radiation and the redshift of galaxies. In conclusion, the Big Bang theory is widely accepted as the most plausible explanation for the origin and evolution of the universe due to the overwhelming evidence supporting it."
            },
            {
                "key": 185,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "Describe briefly the theory behind the Big Bang and how it explains the origin and evolution of the Universe.",
                "solution": "The Big Bang theory states that the Universe originated from a singularity around 13.8 billion years ago. This singularity contained all the mass and energy that exists in the Universe today. Following the Big Bang, the Universe began to expand rapidly, leading to the formation of galaxies, stars, and other celestial bodies. The theory explains the origin of the Universe by suggesting that all matter and energy were initially contained in a single point, which then exploded and expanded outward. This expansion continues even today. The Big Bang theory also accounts for the evolution of the Universe by proposing that galaxies formed as the Universe cooled and matter began to clump together due to gravitational forces. Over time, stars formed within galaxies, leading to the creation of complex systems like our own Solar System. In conclusion, the Big Bang theory provides a comprehensive explanation for the origin and evolution of the Universe, from its explosive beginning to the formation of galaxies and stars."
            },
            {
                "key": 180,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of radioisotopes and their applications in the field of medicine and agriculture. Provide real-life examples to support your explanation.",
                "solution": "Radioisotopes are unstable isotopes of elements that undergo radioactive decay, emitting radiation in the process. These isotopes have various applications in the fields of medicine and agriculture due to their unique properties. In medicine, radioisotopes are used for diagnostic imaging, such as in PET scans, where radioactive tracers are injected into the body to detect abnormalities in tissues and organs. For example, the radioisotope Technetium-99m is commonly used in nuclear medicine to diagnose heart diseases and bone scans. In agriculture, radioisotopes are utilized in techniques such as radiotracer studies to understand plant metabolism, nutrient uptake, and soil-plant interactions. An example is the use of Carbon-14 radioisotope to study carbon cycles in plants and soil, providing insights into photosynthesis and nutrient cycling processes. Overall, the applications of radioisotopes in medicine and agriculture highlight their significance in advancing scientific research and modern technologies."
            },
            {
                "key": 320,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fusion and nuclear fission. How do these two processes differ in terms of energy production and the elements involved? Provide examples of each process and discuss their significance in nuclear reactions.",
                "solution": "Nuclear fusion and nuclear fission are two fundamental processes in atomic and nuclear physics that involve the release of energy through nuclear reactions. Nuclear fusion is the process in which two or more atomic nuclei combine to form a heavier nucleus, releasing a large amount of energy in the process. An example of nuclear fusion is the reaction between two hydrogen isotopes, deuterium and tritium, to form helium and a neutron. This process powers the sun and other stars. On the other hand, nuclear fission is the process in which a heavy nucleus splits into two or more lighter nuclei, also releasing a significant amount of energy. An example of nuclear fission is the splitting of uranium-235 into lighter nuclei such as barium and krypton, along with the release of additional neutrons. This process is utilized in nuclear power plants and atomic bombs. In terms of energy production, nuclear fusion releases more energy per reaction compared to nuclear fission. However, nuclear fusion reactions require extremely high temperatures and pressures to initiate, which makes it more challenging to control and sustain compared to nuclear fission. Overall, both nuclear fusion and nuclear fission have significant importance in nuclear reactions. Nuclear fusion holds the potential for providing a clean and virtually limitless source of energy, while nuclear fission is currently used in power generation and military applications."
            },
            {
                "key": 213,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "What is the phenomenon that explains the bending of light when it passes through different mediums of different refractive indices in Ray Optics?",
                "solution": "Answer The phenomenon that explains the bending of light when it passes through different mediums of different refractive indices in Ray Optics is known as refraction. Refraction is the change in direction of light as it passes from one medium to another. This change in direction occurs due to the difference in speed of light in each medium, which is characterized by their refractive indices. When light enters a medium with a different refractive index, it bends either towards or away from the normal, depending on the change in speed. In conclusion, refraction is the phenomenon responsible for the bending of light when it transitions between mediums with different refractive indices in Ray Optics."
            },
            {
                "key": 150,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of radioactive decay and discuss the differences between alpha decay, beta decay, and gamma decay. Provide examples of each type of radioactive decay and explain how they impact the nucleus of an atom.",
                "solution": "Radioactive decay is the process by which an unstable atomic nucleus loses energy by emitting radiation in the form of particles or electromagnetic waves. This decay results in the transformation of the original element into a different element. 1. Alpha Decay In alpha decay, the nucleus emits an alpha particle consisting of two protons and two neutrons helium nucleus. This results in the atomic number decreasing by 2 and the mass number decreasing by 4. Example Uranium-238 decaying into Thorium-234. 2. Beta Decay In beta decay, a neutron is transformed into a proton, emitting a beta particle electron or a positron positively charged electron. This results in the atomic number increasing by 1 while the mass number remains the same for beta-minus decay or decreases by 1 for beta-plus decay. Example Carbon-14 decaying into Nitrogen-14. 3. Gamma Decay Gamma decay involves the emission of high-energy gamma photons without a change in atomic or mass number. Gamma decay typically follows alpha or beta decay to release excess energy. Example Technetium-99m decaying into Technetium-99. Impact on Nucleus - Alpha decay reduces the mass and atomic number of the nucleus, making it more stable. - Beta decay changes the atomic number, converting a neutron into a proton and vice versa, which leads to the formation of a different element. - Gamma decay releases excess energy from a nucleus without changing its composition, contributing to the stability of the nucleus. Each type of radioactive decay plays a crucial role in the natural process of nuclear transformation and stability."
            },
            {
                "key": 281,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems and discuss the significance of modulation in transmitting information effectively. Provide examples to illustrate your explanation.",
                "solution": "Modulation is the process of varying a carrier signal in accordance with an information signal to transmit information effectively. It helps in enhancing the efficiency and quality of communication systems by allowing signals to travel longer distances without loss of information. The significance of modulation lies in its ability to encode information onto a carrier signal, which increases the signal's frequency range and allows it to be transmitted over long distances through various media. Modulation also helps in multiplexing, where multiple signals can be transmitted simultaneously over a single channel. For example, amplitude modulation AM involves varying the amplitude of the carrier wave in accordance with the information signal. Frequency modulation FM involves varying the frequency of the carrier wave. These modulation techniques are widely used in radio broadcasting to transmit audio signals effectively over long distances. In conclusion, modulation is a crucial aspect of communication systems as it allows for efficient transmission of information over various mediums, making it an essential component in modern communication technologies."
            },
            {
                "key": 348,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "In the context of Magnetism and Matter, explain the concept of magnetic susceptibility and how it is related to the permeability of a substance. Provide an example to illustrate the concept.",
                "solution": "In Magnetism and Matter, magnetic susceptibility is a measure of how easily a material can be magnetized. It is denoted by chi and is defined as the ratio of the intensity of magnetization I to the magnetic field strength H in a substance. The relationship between magnetic susceptibility and permeability can be explained as follows - Permeability is a measure of a material's ability to support the formation of a magnetic field within itself. - Magnetic susceptibility and permeability are related through the formula - 1, where is the permeability of the substance. Example For instance, if a substance has a magnetic susceptibility of 2, then its permeability would be 3 21, indicating that it can support the formation of a magnetic field 3 times stronger than the external magnetic field applied. Understanding the concept of magnetic susceptibility helps in analyzing how different materials respond to magnetic fields and how easily they can be magnetized."
            },
            {
                "key": 84,
                "class": "CBSE 10th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "Explain with the help of diagrams and mathematical equations how diffraction and interference can occur with light waves, and discuss the applications of these phenomena in real life situations.",
                "solution": "To explain diffraction and interference with light waves, we first need to understand that diffraction occurs when light encounters an obstacle or opening that causes it to bend around the edges, creating a pattern of waves spreading out. Interference, on the other hand, is when two or more light waves overlap and either reinforce constructive interference or cancel out destructive interference each other. 1. Diffraction When a light wave encounters a barrier with a slit or edge, it diffracts or bends around it. This bending can be explained using Huygen's principle, where each point on a wavefront becomes a new source of a secondary wave. The interference of these secondary waves leads to the diffraction pattern we observe. Mathematically, the angle of diffraction can be calculated using the equation a sin n, where a is the width of the slit, is the angle of diffraction, n is the order of diffraction, and is the wavelength of light. 2. Interference When two light waves overlap, they can interfere constructively when peaks align with peaks or troughs align with troughs or destructively when peaks align with troughs. This interference pattern can be observed in double-slit experiments, where alternating bright and dark fringes are formed. The path length difference x between the two waves determines the interference pattern. For constructive interference, the path length difference is an integer multiple of the wavelength m, while for destructive interference, it is a half-integer multiple of the wavelength 2m12. Applications - Diffraction Diffraction plays a crucial role in the functioning of optical instruments like microscopes and telescopes, where it helps in increasing resolution and clarity of images. - Interference Interference is widely used in various applications such as thin film coatings anti-reflective coatings, holography, and interferometry techniques in physics and engineering. In conclusion, diffraction and interference are fundamental phenomena in wave optics that have widespread applications in various scientific and technological fields, helping us understand and manipulate light for practical purposes."
            },
            {
                "key": 149,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A proton moves with a velocity of 3 x 106 ms perpendicular to a magnetic field of 0.5 Tesla. Calculate the magnetic force acting on the proton and determine its direction. Show all calculations and explain the concept of magnetic force acting on a moving charge in detail.",
                "solution": "To calculate the magnetic force acting on a proton moving perpendicular to a magnetic field, we can use the formula F qvBsin Where F Magnetic force q Charge of the particle proton charge 1.6 x 10-19 C v Velocity of the particle 3 x 106 ms B Magnetic field strength 0.5 Tesla Angle between the velocity vector and magnetic field vector 90 degrees in this case Plugging in the values F 1.6 x 10-19 C 3 x 106 ms 0.5 Tesla sin90 F 2.4 x 10-13 N The direction of the magnetic force can be determined using the right-hand rule - Point your thumb in the direction of the velocity v of the proton. - Point your fingers in the direction of the magnetic field B. - Your palm will face in the direction of the magnetic force. As for the concept of magnetic force acting on a moving charge - When a charged particle moves through a magnetic field, it experiences a magnetic force perpendicular to both the velocity of the particle and the direction of the magnetic field. - The magnitude of the force depends on the charge of the particle, its velocity, the strength of the magnetic field, and the angle between the velocity vector and the magnetic field vector. - The direction of the force is given by the right-hand rule, which relates the velocity, magnetic field, and force vectors. This concept is fundamental in understanding how charged particles behave in magnetic fields and find applications in various fields such as particle accelerators, MRI machines, and electric motors."
            },
            {
                "key": 351,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the process of synaptic transmission in detail, including the role of neurotransmitters and the steps involved in signal transmission across the synaptic gap.",
                "solution": "Synaptic Transmission Process 1. When an action potential reaches the axon terminal of a presynaptic neuron, voltage-gated calcium channels open, allowing calcium ions to enter the terminal. 2. The influx of calcium ions causes synaptic vesicles containing neurotransmitters e.g., acetylcholine to fuse with the presynaptic membrane, releasing the neurotransmitters into the synaptic cleft. 3. The neurotransmitters then bind to specific receptor proteins on the postsynaptic membrane, leading to the opening of ion channels. 4. This opening of ion channels causes a change in the membrane potential of the postsynaptic neuron, either depolarizing it excitatory or hyperpolarizing it inhibitory. 5. If the depolarization reaches the threshold, it triggers an action potential in the postsynaptic neuron, continuing the signal transmission. Role of Neurotransmitters - Neurotransmitters are chemical messengers released by a presynaptic neuron to transmit signals to a postsynaptic neuron or effector cell. - They bind to specific receptors on the postsynaptic membrane, initiating a response in the postsynaptic cell. - Examples of neurotransmitters include acetylcholine, dopamine, serotonin, and glutamate, each with specific functions in signal transmission. Steps Involved in Signal Transmission 1. Action potential travels down the presynaptic neuron. 2. Calcium ions enter the presynaptic terminal. 3. Synaptic vesicles fuse with the presynaptic membrane, releasing neurotransmitters into the synaptic cleft. 4. Neurotransmitters bind to receptors on the postsynaptic membrane. 5. Ion channels open, leading to a change in the membrane potential of the postsynaptic neuron. 6. Postsynaptic response is generated, either depolarizing or hyperpolarizing the neuron. Understanding the process of synaptic transmission is crucial in comprehending how signals are transmitted between neurons in the nervous system."
            },
            {
                "key": 263,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "Considering the Ray Optics chapter for class CBSE 12th board Biology at a hard level, here is a question for you Question Using the concept of Ray Optics, explain how the phenomenon of total internal reflection occurs and discuss its applications in real-life scenarios.",
                "solution": "Total internal reflection occurs when a ray of light traveling from a denser medium to a rarer medium strikes the interface at an angle greater than the critical angle. At this critical angle, the refracted ray will travel along the interface itself instead of entering the second medium. This phenomenon is guided by Snell's Law of refraction. Applications in real-life scenarios 1. Optical fibers Total internal reflection is utilized in optical fibers, where light signals are transmitted through the fiber by bouncing off the walls due to total internal reflection. This technology is used in telecommunications for high-speed data transmission. 2. Mirages Total internal reflection contributes to the formation of mirages in deserts, where light coming from the sky is internally reflected in hot air layers near the ground, creating an illusion of water bodies. 3. Diamond cutting Total internal reflection is harnessed in diamond cutting and jewelry making to enhance the brilliance and sparkle of diamonds by trapping and reflecting light within the gemstone. These are a few practical applications of total internal reflection that demonstrate its significance in various everyday situations."
            },
            {
                "key": 359,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "In a biological system, a cell is experiencing a magnetic field of 0.5 T. If the charge of an ion inside the cell is 3.2 x 10-19 C and it moves with a velocity of 1.5 x 104 ms perpendicular to the field, calculate the magnitude and direction of the magnetic force acting on the ion. Hint Use the formula F qvBsin",
                "solution": "To calculate the magnitude and direction of the magnetic force on the ion inside the biological cell, we can use the formula F qvBsin, where q is the charge of the ion, v is the velocity of the ion, B is the magnetic field strength, and is the angle between the velocity and the magnetic field. Given Charge of the ion, q 3.2 x 10-19 C Velocity of the ion, v 1.5 x 104 ms Magnetic field strength, B 0.5 T Since the velocity is perpendicular to the magnetic field 90 degrees, sin 1. Plugging in the values F 3.2 x 10-191.5 x 1040.51 F 2.4 x 10-14 N Therefore, the magnitude of the magnetic force acting on the ion is 2.4 x 10-14 N. The direction of the force will be perpendicular to both the velocity and the magnetic field, in this case, into the page or out of the page depending on the direction of the velocity. So, the magnetic force acting on the ion is 2.4 x 10-14 N into the page."
            },
            {
                "key": 326,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain the concept of static friction at the molecular level and how it differs from kinetic friction. Illustrate your answer with relevant diagrams and examples.",
                "solution": "At the molecular level, static friction occurs between the surfaces of two objects in contact. It arises from the interlocking of rough microscopic protrusions on the surfaces, which resist the tendency of one object to slide over the other. The force required to overcome static friction is known as the limiting friction force, which is higher than the force required to maintain relative motion between the objects. On the other hand, kinetic friction occurs when two objects are already in relative motion. The surfaces slide past each other, and the friction force opposes this motion. The kinetic friction force is typically lower than the static friction force as the surfaces are no longer interlocked. Illustrated below is a diagram depicting static friction between two surfaces A and B before any motion occurs, and kinetic friction once motion has been initiated. Diagram for static friction .Surface A Surface B Diagram for kinetic friction Surface A --- -- -- In conclusion, static friction prevents initial motion between surfaces, whereas kinetic friction acts to oppose motion already in progress. Understanding the differences between these two types of friction is essential in solving problems involving the motion of objects on surfaces."
            },
            {
                "key": 177,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "What is the significance of the electrostatic forces in maintaining the structural integrity and function of biological molecules such as DNA and proteins? Provide specific examples to support your answer.",
                "solution": "Electrostatic forces play a crucial role in maintaining the structural integrity and function of biological molecules such as DNA and proteins. These forces are responsible for the attraction and repulsion of charged particles within molecules, ensuring their proper configuration and stability. In DNA, the negatively charged phosphate groups along the backbone interact with positively charged ions like magnesium, helping to stabilize the structure of the double helix. Additionally, hydrogen bonding between the nitrogenous bases is also influenced by electrostatic forces, maintaining the specific pairing required for accurate replication and genetic information transfer. Proteins rely on electrostatic interactions to fold into their functional 3D shapes. Charged amino acid side chains can attract or repel each other, guiding the folding process and stabilizing the final structure. For example, in enzymes, electrostatic forces help to position substrates correctly for catalytic reactions to occur efficiently. Overall, electrostatic forces are essential for the structural integrity and function of biological molecules by ensuring proper folding, stability, and interactions within cellular processes."
            },
            {
                "key": 214,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "What is the phenomenon where two waves overlap and their amplitudes reinforce each other called in wave optics?",
                "solution": "The phenomenon where two waves overlap and their amplitudes reinforce each other is called Constructive Interference."
            },
            {
                "key": 167,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "Explain how the concept of electrostatics can be applied in the functioning of neurons in the nervous system.",
                "solution": "Neurons in the nervous system communicate through electrical signals, and the concept of electrostatics plays a vital role in their functioning. When a neuron is at rest, there is a difference in electric charge across its membrane, creating an electrostatic potential known as the resting membrane potential. This potential difference is maintained by the active transport of ions across the neuron's membrane, primarily involving sodium and potassium ions. When a neuron is stimulated, such as by a neurotransmitter binding to its receptors, there is a change in the permeability of the membrane to ions. This results in the generation of an action potential, a brief electrical impulse that travels along the length of the neuron. The action potential is propagated by the movement of ions across the membrane, with depolarization and repolarization phases driven by shifts in electrostatic charge. Overall, the concept of electrostatics governs the generation, propagation, and termination of electrical signals in neurons, enabling rapid and precise communication within the nervous system."
            },
            {
                "key": 283,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "A concave mirror has a focal length of 15 cm. An object is placed 20 cm in front of the mirror. Calculate the position and nature of the image formed by the mirror.",
                "solution": "To solve this problem, we can use the mirror formula 1f 1v 1u Given f focal length -15 cm since it's a concave mirror u object distance -20 cm negative since the object is in front of the mirror Substitute the values into the formula 1-15 1v 1-20 - 115 1v - 120 - 115 120 1v 4 - 360 1v 160 1v v 60 cm Since the image distance v is positive, the image is formed behind the mirror. This means the image is a real image. Therefore, the image is formed at a distance of 60 cm behind the concave mirror and is a real image."
            },
            {
                "key": 196,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "Describe the concept of static friction and kinetic friction. Provide examples of situations where each type of friction is observed and explain how they affect the motion of objects.",
                "solution": "Static friction is the force that resists the relative motion between two surfaces in contact when there is no relative motion between them. For example, when a book is placed on a table, static friction prevents the book from sliding off the table. Kinetic friction, on the other hand, is the force that opposes the motion of an object when there is relative motion between two surfaces in contact. For instance, when a box is pushed along the floor, kinetic friction acts in the opposite direction of the motion to slow down the box. In both cases, frictional forces affect the motion of objects by either preventing them from moving static friction or by opposing their motion and causing them to slow down kinetic friction. These forces are essential for ensuring stability and control in various everyday situations."
            },
            {
                "key": 188,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of magnetic field lines and how they help in understanding the behaviour of magnets and magnetic materials.",
                "solution": "Magnetic field lines are imaginary lines that indicate the direction and strength of the magnetic field around a magnet. They help us visualize the magnetic field and understand its behavior. The key points are 1. The magnetic field lines emerge from the north pole and enter the south pole of a magnet. 2. The field lines never intersect each other, indicating that there can be only one direction of the magnetic field at any point. 3. The density of magnetic field lines represents the strength of the magnetic field, with closely packed lines representing stronger fields. 4. Magnetic field lines also provide a visual representation of the force experienced by a magnet or magnetic material when placed in the magnetic field. Understanding magnetic field lines helps in predicting the behavior of magnets and magnetic materials. For example, the alignment of magnetic field lines can reveal the direction in which a compass needle will point in the presence of a magnet. Similarly, the pattern of field lines around different materials helps in classifying them as paramagnetic, diamagnetic, or ferromagnetic based on their response to magnetic fields. In conclusion, magnetic field lines play a crucial role in understanding the behavior of magnets and magnetic materials, providing a visual representation of the magnetic forces at play."
            },
            {
                "key": 286,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "What are the factors affecting the force of friction between two surfaces and explain how they influence the magnitude of frictional force?",
                "solution": "Factors affecting the force of friction between two surfaces include 1. Nature of the surfaces Different materials have different roughness and adhesive properties, affecting the frictional force. 2. Normal force The force pressing the two surfaces together directly influences the frictional force. 3. Surface area Larger surface area in contact increases the frictional force. 4. Surface roughness Rough surfaces tend to have higher frictional force compared to smooth surfaces. 5. Temperature Frictional force can be affected by temperature due to changes in the properties of the surfaces. These factors influence the magnitude of frictional force by either increasing or decreasing the resistance between the surfaces when they are in contact. Implementing these factors can help in predicting and manipulating the frictional forces between two surfaces."
            },
            {
                "key": 181,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in the context of communication systems, and provide an example of how modulation is used to transmit signals efficiently.",
                "solution": "Modulation is the process of varying one or more properties of a high-frequency periodic waveform called the carrier signal with a low-frequency message signal to transmit information efficiently. In communication systems, modulation is used to modify the carrier signal in such a way that it can carry the information of the message signal without distortion or loss. Example One of the most common examples of modulation is Amplitude Modulation AM, where the amplitude of the carrier signal is varied in accordance with the variations in the message signal. This allows the message signal to be transmitted efficiently over long distances by superimposing it onto the carrier signal. AM modulation is widely used in broadcasting radio signals where the audio signals are modulated onto a carrier wave for transmission and demodulated at the receiving end to extract the original message signal. Through modulation, the message signal can be transmitted efficiently over long distances without loss of information, making it an essential component of communication systems."
            },
            {
                "key": 204,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "In a Young's double slit experiment, monochromatic light of wavelength 600 nm is used. The distance between the slits is 0.05 mm and the screen is placed 2 m away from the slits. Calculate the distance between the central maximum and the first-order maximum on the screen.",
                "solution": "Step 1 Calculate the slit separation in meters d 0.05 mm 0.05 x 10-3 m Step 2 Calculate the wavelength in meters 600 nm 600 x 10-9 m Step 3 Calculate the distance between the central maximum and the first-order maximum using the formula y Ld Step 4 Substitute the values into the formula y 600 x 10-920.05 x 10-3 Step 5 Calculate the distance y 1.2 x 10-60.05 x 10-3 0.024 m Therefore, the distance between the central maximum and the first-order maximum on the screen is 0.024 meters."
            },
            {
                "key": 112,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "In the Semiconductor Electronics chapter of Physics, for class CBSE 11th board, here is a hard-level question Explain in detail the working principle of a Bipolar Junction Transistor BJT and discuss how it differs from a Field-Effect Transistor FET. Include the concepts of majority and minority charge carriers, doping, and the role of the base region in amplification.",
                "solution": "Bipolar Junction Transistor BJT is a three-layer semiconductor device consisting of an n-type layer sandwiched between two p-type layers NPN or a p-type layer sandwiched between two n-type layers PNP. The working principle of a BJT involves the flow of both majority and minority charge carriers. In a BJT, majority charge carriers are electrons in an NPN transistor and holes in a PNP transistor. These majority carriers move from the emitter to the collector region through the base region, which is very thin and lightly doped. The base region controls the flow of current by modulating the minority charge carriers holes in an NPN transistor and electrons in a PNP transistor. The emitter injects majority charge carriers into the base region, where a small number of them recombine with the minority charge carriers. The remaining majority carriers reach the collector region, resulting in amplification. The transistor acts as a current amplifier, with a small input current controlling a larger output current flowing from the collector to the emitter. On the other hand, Field-Effect Transistor FET operates based on the modulation of the width of the conducting channel by an electric field. It has three terminals source, gate, and drain. FETs have only majority charge carriers either electrons or holes flowing through the channel. Unlike BJTs, FETs operate without the need for injecting minority charge carriers. The input voltage applied to the gate terminal controls the conductivity of the channel, leading to the amplification of the output current flowing between the source and drain terminals. In summary, BJTs use both majority and minority charge carriers for amplification, with the base region controlling the flow of current, while FETs operate based on the modulation of the channel width by an electric field, utilizing only majority charge carriers for amplification."
            },
            {
                "key": 161,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the process of nerve impulse transmission in the human body. How do neurons communicate with each other in the transmission of nerve signals?",
                "solution": "Nerve impulse transmission in the human body involves the communication between neurons. Neurons are specialized cells that transmit electrical signals in the form of nerve impulses. The process of nerve impulse transmission can be summarized as follows 1. Resting potential Neurons have a resting potential with a negative charge inside the cell compared to the outside. This is maintained by the sodium-potassium pump. 2. Depolarization When a nerve impulse is triggered, sodium channels open and sodium rushes into the cell, causing a change in the charge inside the cell from negative to positive. 3. Action potential This change in charge creates an action potential that travels down the length of the neuron as an electrical signal. 4. Repolarization Potassium channels open, allowing potassium to move out of the cell and restore the negative charge inside the cell. Neurons communicate with each other at junctions called synapses. When an action potential reaches the end of a neuron presynaptic neuron, it triggers the release of neurotransmitters into the synaptic cleft. These neurotransmitters bind to receptors on the next neuron postsynaptic neuron, allowing the nerve signal to be transmitted from one neuron to another. In this way, nerve impulse transmission involves the generation of action potentials within neurons and the release of neurotransmitters at synapses to communicate signals between neurons."
            },
            {
                "key": 187,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Define electric potential at a point in an electric field. How is it related to the work done in moving a unit positive charge from infinity to that point?",
                "solution": "Electric potential at a point in an electric field is defined as the amount of work done in bringing a unit positive charge from infinity to that point. Mathematically, electric potential V at a point is given by V Wq, where V is the electric potential, W is the work done in moving the charge and q is the charge. The unit of electric potential is the volt V. The relation between electric potential and work done in moving a unit positive charge from infinity to that point can be stated as follows The electric potential at a point is equal to the work done per unit charge in moving a unit positive charge from infinity to that point. Therefore, the electric potential at a point in an electric field provides information about the amount of work that needs to be done to bring a unit positive charge to that point from infinity."
            },
            {
                "key": 170,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the process of radioactive decay and how it is utilized in radiometric dating. What are the different types of radioactive decay and their significance in nuclear physics?",
                "solution": "Radioactive decay is the spontaneous breakdown of an unstable atomic nucleus, resulting in the emission of radiation. This decay process is utilized in radiometric dating to determine the age of rocks and fossils. The rate at which the radioactive isotope decays is constant over time, allowing scientists to measure the amount of remaining parent isotopes and daughter isotopes to calculate the age of the sample. There are different types of radioactive decay including 1. Alpha Decay In alpha decay, an alpha particle consisting of 2 protons and 2 neutrons is emitted from the nucleus, reducing the atomic number of the parent atom by 2 and the atomic mass by 4. 2. Beta Decay In beta decay, a beta particle an electron or positron is emitted from the nucleus, leading to the conversion of a neutron into a proton or vice versa, changing the atomic number. 3. Gamma Decay Gamma decay is the emission of gamma rays, high-energy electromagnetic radiation, without any change in atomic or mass numbers. It often follows alpha or beta decay to stabilize the nucleus. The significance of different types of radioactive decay in nuclear physics lies in their ability to provide insights into the stability of atomic nuclei, the transmutation of elements, and the release of energy in nuclear reactions. Each type of decay contributes to our understanding of the behavior of radioactive isotopes and their applications in various fields including medicine, energy production, and environmental monitoring."
            },
            {
                "key": 335,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "Which of the following is not a component of the universe according to the Big Bang theory? A Stars B Planets C Dark matter D Water",
                "solution": "According to the Big Bang theory, Water is not a component of the universe. The other options - Stars, Planets, and Dark matter are all components of the universe."
            },
            {
                "key": 143,
                "class": "CBSE 11th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "In the context of Ray Optics, explain the phenomenon of total internal reflection and derive the condition for total internal reflection to occur at the interface between two media. Give an example from everyday life where total internal reflection is utilized.",
                "solution": "Total internal reflection is a phenomenon that occurs when a light ray traveling from a medium of higher refractive index towards a medium of lower refractive index, strikes the interface at an angle greater than the critical angle. In this case, instead of refracting into the second medium, the light ray is reflected back into the first medium. The condition for total internal reflection to occur can be derived using Snell's Law and the concept of critical angle. The critical angle, represented by c, is the angle of incidence in the higher refractive index medium where the angle of refraction in the lower refractive index medium is 90 degrees. Mathematically, the condition for total internal reflection is given by n1 sinc n2 sin90 where n1 and n2 are the refractive indices of the two media. Example of total internal reflection in everyday life is the phenomenon of mirage on a hot sunny day. When hot air is close to the ground, its refractive index is lower than the surrounding cooler air. Sunlight passing through the layers of hot air close to the ground undergoes total internal reflection at the interface between the layers of different refractive indices, creating the illusion of water on the road ahead. So, the condition for total internal reflection to occur is when the angle of incidence is greater than the critical angle, and an example from everyday life where total internal reflection is utilized is the mirage phenomenon."
            },
            {
                "key": 225,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain how the formation of stars and galaxies in the universe is attributed to the process of nucleosynthesis.",
                "solution": "Answer The formation of stars and galaxies in the universe is attributed to the process of nucleosynthesis, which involves the formation of heavier elements from lighter ones. During the early stages of the universe, only light elements like hydrogen and helium existed. As stars are formed, they undergo nuclear fusion in their cores, resulting in the synthesis of heavier elements like carbon, oxygen, and iron. This process of nucleosynthesis occurs through stellar evolution, where the intense pressure and temperature in the core of a star enable nuclear reactions to take place. These reactions convert lighter elements into heavier ones, releasing immense amounts of energy in the form of light and heat. The enriched materials from these stars are then dispersed into space when they explode as supernovae. These elements then become the building blocks for new stars and planets, contributing to the formation of galaxies in the universe. Overall, nucleosynthesis is a crucial process that drives the evolution of stars and galaxies in the universe by creating a diverse range of elements essential for the formation of celestial bodies."
            },
            {
                "key": 285,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain how the expansion of the universe provides evidence for the Big Bang theory.",
                "solution": "The expansion of the universe provides evidence for the Big Bang theory through the observation that distant galaxies are moving away from us in all directions. This expansion suggests that the universe was once in a highly dense and hot state, which aligns with the Big Bang theory's proposition that the universe began from a single point and has been expanding ever since. The discovery of cosmic microwave background radiation, which is considered a remnant of the early universe, also supports the idea of the Big Bang. Hence, the expansion of the universe and the consistent observations of its increasing rate provide compelling evidence for the validity of the Big Bang theory."
            },
            {
                "key": 349,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain how the movement of charged particles, such as ions, across a cell membrane is influenced by the presence of a magnetic field. Discuss the biological implications of this phenomenon in terms of nerve signaling and muscle contraction.",
                "solution": "Charged particles, like ions, moving across a cell membrane can be influenced by a magnetic field due to the magnetic force acting on the moving charges. This force can alter the trajectory and speed of the charged particles, affecting the movement of ions across the cell membrane. In terms of biological implications, the presence of a magnetic field can impact nerve signaling and muscle contraction. Nerve signaling involves the movement of ions, such as sodium and potassium, across cell membranes to generate electrical impulses. A magnetic field can interfere with this process, potentially disrupting nerve signaling. Similarly, muscle contraction relies on the movement of calcium ions within muscle cells. The presence of a magnetic field can affect the distribution of these ions, potentially leading to abnormal muscle contractions. Overall, the influence of a magnetic field on the movement of charged particles across a cell membrane can have significant biological implications for nerve signaling and muscle contraction processes in the human body."
            },
            {
                "key": 324,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "In a double-slit experiment, monochromatic light with a wavelength of 600 nm is used. The distance between the slits is 0.2 mm and the screen is placed 1 m away from the slits. If the 5th dark fringe is observed at an angle of 0.1 radians from the central maximum, calculate the width of the central maximum on the screen. Hint Use the formula for fringe width in double-slit interference.",
                "solution": "Given Wavelength of light 600 nm 600 10-9 m Distance between the slits d 0.2 mm 0.2 10-3 m Distance from the slits to the screen L 1 m Angle of observation 0.1 radians Fringe number n 5 The formula for fringe width in double-slit interference is w L d Using the formula and given values, we can calculate the fringe width for the central maximum w 600 10-9 m 1 m 0.2 10-3 m 3 10-3 m Since the 5th dark fringe is observed at an angle of 0.1 radians from the central maximum, the width of the central maximum on the screen would be wtotal 5w 5 3 10-3 m 15 10-3 m 15 mm Therefore, the width of the central maximum on the screen is 15 mm."
            },
            {
                "key": 231,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain how the use of satellites in communication systems has revolutionized the way we communicate globally. Include the role of geostationary satellites, frequency bands, and modulation techniques in ensuring efficient and reliable communication.",
                "solution": "Satellites in communication systems have revolutionized global communication by allowing widespread connectivity regardless of geographical boundaries. Geostationary satellites play a crucial role by orbiting the Earth at the same speed as the Earth's rotation, which enables them to stay fixed relative to a specific location on the ground. This characteristic makes them ideal for communication purposes, as they can provide continuous coverage over a large area. In terms of frequency bands, different bands are utilized for specific communication purposes to prevent interference and ensure efficient data transmission. For example, high-frequency bands are typically used for high-speed data transfer, while lower frequency bands are used for wider coverage and penetration through obstacles. Modulation techniques play a vital role in communication by converting digital data into analog signals that can be transmitted over long distances without losing information. Techniques like amplitude modulation AM, frequency modulation FM, and phase modulation PM are commonly used to encode information onto carrier waves for transmission. Overall, the strategic use of geostationary satellites, frequency bands, and modulation techniques has significantly enhanced the efficiency and reliability of global communication systems, enabling seamless connectivity and communication on a worldwide scale."
            },
            {
                "key": 307,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "What is the concept behind the phenomenon of electrostatic induction? Explain with an example.",
                "solution": "The concept behind electrostatic induction is the redistribution of charges in an object caused by bringing a charged object near it, without direct contact between the two. This occurs due to the attraction or repulsion of charges within the object. Example Consider a neutral conducting sphere. When a positively charged rod is brought near the sphere, the electrons in the sphere are attracted towards the rod, causing them to accumulate on the side closer to the rod. This results in an induced separation of charges, with the side nearest to the rod becoming negatively charged and the opposite side becoming positively charged. This polarization of charges is the concept of electrostatic induction. In conclusion, electrostatic induction involves the redistribution of charges in an object due to the presence of a charged object nearby, without direct contact."
            },
            {
                "key": 308,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "What is the phenomenon called when a paramagnetic substance becomes weakly magnetized in the presence of an external magnetic field, but loses its magnetization once the field is removed?",
                "solution": "The phenomenon described in the question is known as magnetic susceptibility. Magnetic susceptibility is a measure of how easily a material can be magnetized when placed in an external magnetic field. Paramagnetic substances are weakly attracted to magnetic fields and become magnetized in the presence of an external magnetic field. However, once the external magnetic field is removed, paramagnetic substances lose their magnetization. Therefore, the phenomenon described where a paramagnetic substance becomes weakly magnetized in the presence of an external magnetic field but loses its magnetization once the field is removed is known as magnetic susceptibility."
            },
            {
                "key": 171,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the role of neurotransmitters in synaptic transmission and how they contribute to the proper functioning of the nervous system. Additionally, discuss the significance of synaptic vesicles in the release and reuptake of neurotransmitters at the synapse.",
                "solution": "Neurotransmitters play a crucial role in synaptic transmission by transmitting signals across the synapse from one neuron to another. They are chemicals that are released by the presynaptic neuron and received by the postsynaptic neuron, thereby enabling communication within the nervous system. The proper functioning of the nervous system is dependent on the right balance of neurotransmitters, as they regulate essential functions such as mood, memory, and muscle movement. For example, serotonin is involved in regulating mood, while acetylcholine plays a role in muscle contraction. Synaptic vesicles are sac-like structures in the presynaptic neuron that store neurotransmitters. Upon receiving an action potential, these vesicles fuse with the presynaptic membrane, releasing neurotransmitters into the synaptic cleft. This process, known as exocytosis, allows neurotransmitters to bind to receptors on the postsynaptic neuron, transmitting the signal. After the transmission, synaptic vesicles aid in the reuptake of excess neurotransmitters to regulate signal intensity and prevent overstimulation. This recycling process ensures the efficient and precise transmission of signals across the synapse. In summary, neurotransmitters and synaptic vesicles are essential components of synaptic transmission, facilitating communication between neurons and contributing to the proper functioning of the nervous system."
            },
            {
                "key": 182,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the role of doping in a semiconductor material?",
                "solution": "Role of Doping in Semiconductor Material Doping is the process of intentionally introducing impurities into a semiconductor material to enhance its electrical and physical properties. In semiconductor electronics, doping plays a crucial role in modifying the conductivity and behavior of the semiconductor material. There are two types of doping 1. N-type doping In N-type doping, elements such as phosphorus or arsenic are introduced into a semiconductor material to create free electrons, which increase its conductivity. These impurities have one extra electron in their outermost shell compared to the host semiconductor atoms, resulting in the donation of free electrons to the material. 2. P-type doping In P-type doping, elements such as boron or gallium are introduced into a semiconductor material to create holes or positive charge carriers. These impurities have one less electron in their outermost shell compared to the host semiconductor atoms, leading to the generation of holes that act as positive charge carriers. By strategically doping the semiconductor material with N-type or P-type impurities, the conductivity, charge carrier concentration, and overall performance of semiconductor devices such as diodes and transistors can be tailored to meet specific electronic requirements. Doping helps in controlling the flow of current, amplification of signals, and functioning of electronic devices in semiconductor electronics."
            },
            {
                "key": 205,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "How does the phenomenon of gravitational lensing provide evidence for the existence of dark matter in the universe? Support your answer with relevant theoretical concepts and observational evidence.",
                "solution": "Gravitational lensing is a phenomenon in which light from a distant object is bent due to the gravitational pull of a massive object present in its path, leading to the distortion or magnification of the image observed from Earth. Evidence for the existence of dark matter can be inferred from the gravitational lensing effect observed in galaxy clusters. When scientists observe the gravitational lensing caused by the visible mass in a galaxy cluster, they find that the amount of bending is significantly more than what can be accounted for by the mass of the visible matter alone. This discrepancy suggests the presence of invisible mass, which we refer to as dark matter. The theoretical concept behind this inference is that dark matter, though invisible and non-interacting with electromagnetic radiation, exerts gravitational forces and interacts with regular matter through gravity. This allows dark matter to produce the observed gravitational lensing effects on light passing through galaxy clusters. Observational evidence of gravitational lensing and dark matter comes from studies of galaxy rotation curves, cosmic microwave background radiation, and galaxy cluster dynamics. These observations consistently show that the gravitational effects observed in the universe cannot be explained by the visible matter alone, pointing towards the existence of dark matter. In conclusion, the phenomenon of gravitational lensing provides strong evidence for the existence of dark matter in the universe by highlighting discrepancies between the observed gravitational effects and the mass of visible matter, as supported by theoretical concepts and observational evidence in various astrophysical studies."
            },
            {
                "key": 289,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A wire of length 2m carries a current of 3A along the positive x-direction. The wire lies on the x-axis from x0m to x2m. A magnetic field of 5T is directed along the positive y-direction. Calculate the magnetic force experienced by the wire.",
                "solution": "To calculate the magnetic force experienced by the wire, we will use the formula F I times L times B times sintheta where - F is the magnetic force - I is the current flowing through the wire 3A - L is the length of the wire 2m - B is the magnetic field strength 5T - is the angle between the current direction and the magnetic field direction. Since the wire lies along the x-axis and the magnetic field is along the positive y-direction, the angle between them is 90 degrees. Substitute these values into the formula F 3A times 2m times 5T times sin90circ F 3 times 2 times 5 times 1 F 30 N Therefore, the magnetic force experienced by the wire is 30 N."
            },
            {
                "key": 328,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of diamagnetism, paramagnetism, and ferromagnetism with suitable examples and discuss how the magnetic properties of materials are influenced by their atomic and molecular structure. Also, compare and contrast the behavior of these materials in an external magnetic field.",
                "solution": "Diamagnetism, paramagnetism, and ferromagnetism are three types of magnetism displayed by materials due to their atomic and molecular structure. 1. Diamagnetism - Diamagnetic materials have all paired electrons, resulting in no net magnetic moment. - Example Copper - In an external magnetic field, diamagnetic materials are weakly repelled by the field. 2. Paramagnetism - Paramagnetic materials have unpaired electrons, leading to the presence of a net magnetic moment. - Example Aluminum - In an external magnetic field, paramagnetic materials align with the field, becoming weakly attracted to it. 3. Ferromagnetism - Ferromagnetic materials have unpaired electrons and exhibit spontaneous magnetization even in the absence of an external magnetic field. - Example Iron - In an external magnetic field, ferromagnetic materials strongly attract and retain their magnetization after the field is removed. The magnetic properties of materials are influenced by their atomic and molecular structure. The presence of unpaired electrons and atomic alignment affect how materials respond to external magnetic fields. Diamagnetic, paramagnetic, and ferromagnetic materials exhibit different behaviors, with diamagnetic materials being weakly repelled, paramagnetic materials being weakly attracted, and ferromagnetic materials strongly attracting and retaining magnetism. In conclusion, the differences in magnetic behaviors of materials arise from their atomic and molecular structure, and their response to external magnetic fields can be attributed to the presence of unpaired electrons and the alignment of magnetic moments within the material."
            },
            {
                "key": 212,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the role of doping in semiconductors? Explain with examples of n-type and p-type semiconductors.",
                "solution": "Doping in semiconductors is a process of intentionally adding impurities to the pure semiconductor material in order to alter its electrical properties. In n-type semiconductors, a small amount of pentavalent impurity such as phosphorus or arsenic is added to the pure semiconductor material e.g., silicon. These impurities create excess negative charge carriers electrons in the crystal lattice. This increases the conductivity of the material as electrons are the majority charge carriers. On the other hand, in p-type semiconductors, a small amount of trivalent impurity such as boron or gallium is added to the pure semiconductor material. These impurities create holes or missing electrons in the crystal lattice. The presence of these holes allows for the movement of positive charge carriers known as electron holes effectively increasing the conductivity of the material. In summary, doping plays a crucial role in controlling the conductivity and electrical properties of semiconductors by introducing impurities that alter the concentration of charge carriers."
            },
            {
                "key": 209,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A conducting rod of length 0.5m moves with a velocity of 5ms perpendicular to a magnetic field of 0.8T. Calculate the induced emf in the rod and the direction of the current flow when the rod is in the magnetic field.",
                "solution": "Given, Length of conducting rod l 0.5 m Velocity of rod v 5 ms Magnetic field strength B 0.8 T Induced emf can be calculated by the formula, B l v Substitute the values, 0.8 0.5 5 2 V Therefore, the induced emf in the rod is 2 Volts. To determine the direction of current flow, use Fleming's Right-hand rule - Thumb Direction of motion of the rod - Forefinger Direction of the magnetic field - Middle finger Direction of induced current As per Fleming's Right-hand rule, the direction of the current flow in the conducting rod will be perpendicular to both the direction of motion of the rod and the magnetic field."
            },
            {
                "key": 184,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "Explain Young's Double Slit Experiment and how it demonstrates the principle of interference in wave optics.",
                "solution": "Young's Double Slit Experiment is a classic experiment in wave optics that demonstrates the principle of interference. In this experiment, a coherent light source is shone on a barrier with two small slits, creating two coherent wavefronts. These two wavefronts overlap and interfere with each other, creating an interference pattern on a screen placed behind the slits. Interference occurs when waves meet and their amplitudes either reinforce constructive interference or cancel out destructive interference. In the case of Young's experiment, the waves from the two slits interfere with each other either constructively or destructively, resulting in alternate bright and dark fringes on the screen where light and dark bands are formed. The positions of these fringes can be explained using the concept of path difference, which is the difference in path lengths traveled by the two waves from the slits to a point on the screen. Constructive interference occurs when the path difference is an integer multiple of the wavelength of light, leading to bright fringes. Destructive interference occurs when the path difference is a half-integer multiple of the wavelength, resulting in dark fringes. Therefore, Young's Double Slit Experiment demonstrates the principle of interference in wave optics by showing how waves can interact with each other to create a pattern of alternating bright and dark fringes, illustrating the wave nature of light."
            },
            {
                "key": 357,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "How does the charges on a biological cell membrane contribute to the generation and maintenance of an electric field? Provide an explanation including the role of ion channels and the distribution of charges across the membrane.",
                "solution": "The charges on a biological cell membrane contribute to the generation and maintenance of an electric field through the presence of ion channels. Ion channels are proteins embedded in the cell membrane that allow the passage of ions in and out of the cell. The distribution of charges across the membrane is mainly due to the presence of different ions on either side of the membrane. These ions create an imbalance, leading to a potential difference across the membrane, which results in the generation of an electric field. Ion channels play a crucial role in maintaining this balance by regulating the movement of ions across the membrane. This movement of ions helps in establishing and sustaining the electric field necessary for various cellular processes such as cell signaling and maintaining the cell's resting membrane potential."
            },
            {
                "key": 201,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of 'Frequency Modulation FM' and its advantages over 'Amplitude Modulation AM' in the context of communication systems. Include mathematical equations and diagrams to support your answer.",
                "solution": "Frequency Modulation FM is a method of encoding information on a carrier wave by varying the frequency of the wave in accordance with the signal being transmitted. In FM, the amplitude of the carrier wave remains constant, while the frequency changes. This modulation technique offers several advantages over Amplitude Modulation AM in communication systems. Advantages of FM over AM 1. Greater noise immunity FM signals are less prone to noise interference compared to AM signals, as the information is encoded in the frequency variations rather than amplitude variations. 2. Higher sound quality FM transmission provides better sound quality and fidelity, making it suitable for broadcasting music and high-fidelity audio. 3. Larger bandwidth efficiency FM signals can carry more information per unit of bandwidth compared to AM signals, allowing for more efficient use of the frequency spectrum. Mathematical equations The equation for FM modulation is given by st A cos2pi fc t kf int mt dt where - st is the modulated FM signal, - A is the amplitude of the carrier wave, - fc is the carrier frequency, - kf is the frequency sensitivity factor, - mt is the message signal. Diagrams Include a diagram illustrating the concept of frequency modulation, showing how the frequency of the carrier wave varies in accordance with the message signal. Include a comparison diagram between FM and AM, highlighting the differences in the waveforms and bandwidth utilization. This solution provides a concise explanation of FM modulation and its advantages over AM, supported by relevant mathematical equations and diagrams to aid in understanding."
            },
            {
                "key": 337,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "In the context of biology, how does the body utilize electrostatic forces to regulate nerve impulses and muscle contractions?",
                "solution": "In biology, the body utilizes electrostatic forces to regulate nerve impulses and muscle contractions through the process of action potentials. Nerve impulses are initiated when there is a change in the membrane potential of a neuron due to the movement of ions across the cell membrane. This movement of ions generates an electrical signal that travels along the nerve fiber, allowing for communication between different parts of the body. Similarly, in muscle contractions, the interaction between actin and myosin filaments is regulated by the release of calcium ions within muscle cells. These ions trigger a series of events that result in the contraction of muscle fibers, enabling movement and proper functioning of the muscles. Overall, the body utilizes electrostatic forces to ensure proper communication between nerves and muscles, allowing for coordination and control of various physiological processes."
            },
            {
                "key": 215,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of the Big Bang theory and its significance in the formation of the universe according to the principles of modern cosmology.",
                "solution": "The Big Bang theory is a widely accepted scientific explanation for the origin and evolution of the universe. According to this theory, the universe began as an extremely hot and dense point about 13.8 billion years ago and has been expanding ever since. The significance of the Big Bang theory in the formation of the universe lies in its ability to explain several key aspects of the universe, including the observed redshift of distant galaxies, the cosmic microwave background radiation, and the abundance of light elements in the universe. In modern cosmology, the Big Bang theory serves as the foundation for our understanding of the early universe and the processes that have shaped its development over billions of years. It provides a framework for studying the evolution of galaxies, stars, and other celestial objects, helping scientists unravel the mysteries of the cosmos."
            },
            {
                "key": 356,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Explain the concept of frictional force in cell biology and discuss its role in various cellular processes. Provide examples to support your explanation.",
                "solution": "Frictional force in cell biology refers to the resistance encountered during the movement of various cellular components. This force plays a crucial role in multiple cellular processes by facilitating intracellular transport, maintaining cell shape, and enabling cell division. One example of frictional force in cell biology is seen during cell migration. Here, the friction between the cell membrane and the extracellular matrix helps the cell move in a directed manner. Another example is during endocytosis, where the frictional force between the cell membrane and vesicles aids in the internalization of extracellular contents. In summary, frictional force in cell biology is essential for cellular functions like movement, shape maintenance, and division. Its presence and magnitude influence various processes vital for cell survival and overall functionality."
            },
            {
                "key": 332,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the function of a semiconductor diode in a circuit?",
                "solution": "A semiconductor diode in a circuit functions as a one-way valve for electrical current. It allows current to flow in only one direction while blocking current in the opposite direction. This property is crucial in various electronic applications such as rectification, signal demodulation, and voltage regulation. The diode's ability to control the flow of current makes it an essential component in electronic circuits."
            },
            {
                "key": 296,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "A 1000 kg car is moving on a flat road at a speed of 30 ms. The coefficient of kinetic friction between the tires and the road is 0.6. Calculate the distance the car will travel before coming to a complete stop. Assume g 10 ms2",
                "solution": "To solve this problem, we can use the equation of motion under friction v2 u2 2as Where v final velocity 0 ms, as the car comes to a stop u initial velocity 30 ms a acceleration due to friction -g s distance traveled Plugging the given values into the equation 0 302 2-0.610s 0 900 - 12s 12s 900 s 75 meters Therefore, the car will travel 75 meters before coming to a complete stop."
            },
            {
                "key": 219,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the principle behind the working of a cyclotron? Explain how a cyclotron accelerates charged particles.",
                "solution": "The principle behind the working of a cyclotron is based on the interaction of a magnetic field and an alternating electric field to accelerate charged particles. In a cyclotron, charged particles are injected into the center of two D-shaped hollow metal electrodes, known as dees. The dees are placed in a strong magnetic field that causes the particles to move in a circular path due to the Lorentz force acting perpendicular to the direction of motion and the magnetic field. As the particles move inside the dees, an alternating electric field between the dees is applied by an oscillator. This electric field alternates in direction, causing the charged particles to gain kinetic energy each time they pass through the gap between the dees. The frequency of the oscillator is adjusted to match the frequency at which the particles complete a circle, ensuring they gain energy with each revolution. Due to this constant acceleration, the charged particles eventually reach high speeds and energies, making them suitable for various applications such as nuclear physics research or medical purposes."
            },
            {
                "key": 336,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Which type of friction occurs when two solid surfaces are in contact and oppose the motion of an object sliding across them? A Static friction B Kinetic friction C Rolling friction D Fluid friction",
                "solution": "Answer B Kinetic friction Solution Kinetic friction occurs when two solid surfaces are in contact and oppose the motion of an object sliding across them. It is present when the object is already in motion."
            },
            {
                "key": 178,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of diamagnetic, paramagnetic, and ferromagnetic materials in the context of magnetism and matter. Provide examples of each type of material and discuss their magnetic properties in detail. Additionally, elaborate on the factors that influence the magnetic properties of these materials.",
                "solution": "Concept Explanation 1. Diamagnetic Materials Diamagnetic materials have all electrons paired, resulting in no net magnetic moment. They are weakly repelled by a magnetic field. Example Copper, Bismuth Magnetic Properties They exhibit only a small negative susceptibility. 2. Paramagnetic Materials Paramagnetic materials have some unpaired electrons, leading to a net magnetic moment. They are weakly attracted by a magnetic field. Example Aluminum, Oxygen Magnetic Properties They exhibit a positive susceptibility, but weaker than ferromagnetic materials. 3. Ferromagnetic Materials Ferromagnetic materials have permanent magnetic moments even in the absence of an external magnetic field due to the alignment of magnetic moments of atoms in domains. Example Iron, Nickel Magnetic Properties They exhibit strong positive susceptibility and can be magnetized. Factors Influencing Magnetic Properties 1. Atomic Structure The presence of unpaired electrons influences the magnetic behavior. 2. Magnetization Alignment of magnetic moments in domains affects the overall magnetic properties. 3. Temperature Temperature changes can affect the alignment of magnetic moments. 4. External Magnetic Field Interaction with an external magnetic field can alter the magnetic properties. In summary, diamagnetic materials have no net magnetic moment, paramagnetic materials have some unpaired electrons leading to a net magnetic moment, and ferromagnetic materials have strong permanent magnetic moments. The magnetic properties of these materials are influenced by factors such as atomic structure, magnetization, temperature, and external magnetic field."
            },
            {
                "key": 203,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "A convex lens with focal length 10 cm is placed in a medium of refractive index 1.5. A point object is placed on the principal axis at a distance of 15 cm from the lens. Calculate the position of the image formed by the lens, considering all possible refraction and reflection phenomena.",
                "solution": "Given data Focal length of convex lens, f 10 cm Refractive index of medium, 1.5 Object distance from lens, u 15 cm Using the lens formula 1f - 1 1R1 - 1R2 where R1 and R2 are the radii of curvature of the lens surface facing the object and the surface facing away from the object respectively. For a thin lens, R1 R2 R assuming both the surfaces have the same radius of curvature. 1f - 1 1R - 1R 1f 0 This implies that the lens forms image at infinity. Hence, the image formed by the lens is at infinity. Let me know if you need more clarification."
            },
            {
                "key": 198,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "A current-carrying wire is placed in a uniform magnetic field. Explain why the wire experiences a force and derive the expression for the force acting on the wire in terms of the current flowing through it, the length of the wire, and the strength of the magnetic field.",
                "solution": "When a current-carrying wire is placed in a magnetic field, each free electron in the wire experiences a force due to the Lorentz force law. This force causes the electrons to move, resulting in an overall force experienced by the wire. The expression for the force textbfF acting on a current-carrying wire of length l in a magnetic field textbfB is given by textbfF Itextbfl times textbfB where textbfF force on the wire I current flowing through the wire textbfl length of the wire textbfB strength of the magnetic field Therefore, the force experienced by the wire is perpendicular to both the direction of current flow and the direction of the magnetic field."
            },
            {
                "key": 216,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "FRICTION",
                "question": "Define the term friction and explain its importance in our daily lives. Give two examples to illustrate the role of friction in simple machines.",
                "solution": "Friction is the force that opposes the relative motion or tendency of such motion of two surfaces in contact. It is an essential force in our daily lives that helps us walk, grip objects, and even drive vehicles. Without friction, it would be impossible to perform simple tasks. Importance of friction in our daily lives 1. Friction helps us walk on the ground without slipping. 2. Friction allows us to grip and hold objects firmly. 3. Friction enables vehicles to stop when brakes are applied. Examples of the role of friction in simple machines 1. In a screwdriver, the friction between the top of the screw and screwdriver head helps in turning the screw efficiently. 2. In a bicycle, the friction between the tires and the road allows the rider to move forward by providing traction. Overall, friction plays a crucial role in simplifying our daily tasks and making machines work efficiently."
            },
            {
                "key": 350,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of radioactive decay and discuss how it is used in radiometric dating to determine the age of rocks and fossils. How does the half-life of a radioactive isotope play a crucial role in this process?",
                "solution": "Radioactive decay is the process by which unstable atomic nuclei lose energy by emitting radiation. This can result in the transformation of one element into another. In radiometric dating, scientists use the known rate of radioactive decay of certain isotopes to determine the age of rocks and fossils. During radioactive decay, the parent isotope decays into a daughter isotope at a constant rate known as the half-life. The half-life is the time taken for half of the radioactive nuclei in a sample to decay. By measuring the ratio of parent to daughter isotopes in a sample, scientists can calculate how many half-lives have passed and thus determine the age of the sample. The half-life of a radioactive isotope is crucial in radiometric dating as it provides a fixed timescale for the decay process. Different isotopes have different half-lives, with some lasting seconds and others millions of years. By selecting isotopes with appropriate half-lives, scientists can accurately date samples from a wide range of geological timescales. In conclusion, radioactive decay and the concept of half-life play a significant role in radiometric dating, providing scientists with a powerful tool to determine the age of rocks and fossils with precision."
            },
            {
                "key": 194,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "In Young's double-slit experiment, monochromatic light of wavelength 600 nm is used. The distance between the slits is 0.2 mm and the screen is placed 1.0 m away from the slits. Calculate the separation between the central maximum and the second-order maximum on the screen. Given speed of light in vacuum 3 x 108 ms.",
                "solution": "Given data Wavelength of light 600 nm 600 x 10-9 m Distance between the slits d 0.2 mm 0.2 x 10-3 m Distance between slits and screen D 1.0 m Speed of light in vacuum c 3 x 108 ms Formula for calculating position of nth order maximum in Young's double-slit experiment yn n D d For second-order maximum n2 y2 2 D d Substitute the given values y2 2 600 x 10-9 1.0 0.2 x 10-3 y2 1.2 x 10-6 0.2 x 10-3 y2 6 mm Therefore, the separation between the central maximum and the second-order maximum on the screen is 6 mm."
            },
            {
                "key": 339,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the role of moving charges in creating a magnetic field according to the Biot-Savart Law?",
                "solution": "According to the Biot-Savart Law, the magnetic field generated by a current-carrying conductor is directly proportional to the magnitude of the current and the distance from the conductor. Moving charges create a magnetic field due to their movement. As charges move, they generate a magnetic field around them. This magnetic field can be calculated using the Biot-Savart Law, which describes how the magnetic field strength changes with the distance from the moving charges."
            },
            {
                "key": 334,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "WAVE OPTICS",
                "question": "How does light behave when passing through a narrow slit in the context of wave optics?",
                "solution": "When light passes through a narrow slit in the context of wave optics, it undergoes diffraction. Diffraction is the bending of light waves around obstacles and edges. As a result, light spreads out and creates a pattern of alternating bright and dark fringes on a screen placed behind the slit. This phenomenon is known as the single-slit diffraction pattern. The width of the slit and the wavelength of light determine the spreading angle and the spacing between the fringes. It is a characteristic property of waves and demonstrates the wave nature of light."
            },
            {
                "key": 200,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Explain the concept of nuclear fission and nuclear fusion. How do they differ from each other in terms of the process, energy release, and applications in various fields? Give examples to support your explanation.",
                "solution": "Nuclear fission is the process of splitting a heavy nucleus into smaller nuclei, releasing a large amount of energy in the form of heat and radiation. This process is typically initiated by bombarding the nucleus with a neutron. On the other hand, nuclear fusion is the process of combining two light nuclei to form a heavier nucleus, also releasing a large amount of energy in the form of heat and radiation. This process occurs naturally in stars like the Sun. In terms of the process, nuclear fission involves splitting a nucleus, while nuclear fusion involves combining nuclei. The energy release in nuclear fission is typically higher compared to nuclear fusion. Nuclear fission is used in nuclear power plants to generate electricity, while nuclear fusion is being researched as a potential source of clean energy. Example of nuclear fission is the splitting of uranium-235 into barium and krypton, while an example of nuclear fusion is the combining of deuterium and tritium to form helium in a fusion reaction. In summary, nuclear fission and nuclear fusion are two processes that involve releasing energy through nuclear reactions, with differences in the process, energy release, and applications."
            },
            {
                "key": 193,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Class 12th CBSE Physics Question A concave mirror forms an inverted image of a certain object which is three times the size of the object. If the object is placed at a distance of 15 cm from the mirror, determine the focal length of the mirror and the distance of the image from the mirror in this case. Consider using the mirror formula 1f 1v 1u",
                "solution": "Given that the image formed by the concave mirror is inverted and three times the size of the object. This implies the magnification, M -3. Also, the object distance u -15 cm. Using the formula for magnification, M -vu, where v is the image distance -3 -v-15 v -45 cm Since the image distance is negative, the image is formed on the same side as the object, which means it is a real image. Now, we can use the mirror formula 1f 1v 1u to find the focal length of the concave mirror 1f 1-45 1-15 1f -345 - 115 1f -115 f -15 cm The negative sign indicates that the concave mirror is a diverging mirror. Therefore, the focal length of the mirror is -15 cm and the distance of the image from the mirror is -45 cm."
            },
            {
                "key": 291,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of quantization error in communication systems and discuss its implications on signal quality and processing. How can this error be minimized to ensure accurate signal transmission and reception in digital communication?",
                "solution": "Quantization error in communication systems occurs due to the process of converting an analog signal into a digital signal by rounding off the continuous analog signal at discrete levels. This rounding off leads to a discrepancy between the original analog signal and the quantized digital signal. The implications of quantization error on signal quality and processing include distortion and loss of information in the transmitted signal. The higher the quantization levels, the smaller the error but at the cost of increased data size. To minimize quantization error and ensure accurate signal transmission and reception in digital communication, techniques such as increasing the number of quantization levels, using higher resolution analog-to-digital converters, and implementing error correction coding schemes can be employed. By using sophisticated algorithms for quantization and maintaining a balance between the number of quantization levels and data size, it is possible to reduce quantization error and improve signal quality in digital communication systems."
            },
            {
                "key": 120,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Sure! Here is a question In a nuclear fusion reaction, two deuterium nuclei combine to form a helium nucleus, releasing energy. Calculate the amount of energy released in MeV when 1 mol of deuterium is consumed in the fusion reaction. Given Mass of deuterium 2.014 u, Mass of helium 4.0026 u, c3x108 ms",
                "solution": "To calculate the amount of energy released in MeV when 1 mol of deuterium is consumed in the fusion reaction, we need to first determine the mass defect. The mass defect is the difference in the mass of the reactants 2 deuterium nuclei and the mass of the product helium nucleus in atomic mass units u. Mass defect 2 x mass of deuterium - mass of helium Mass defect 2 x 2.014 u - 4.0026 u Mass defect 4.028 u - 4.0026 u Mass defect 0.0254 u Next, we convert the mass defect to kg using the conversion factor 1 u 1.66 x 10-27 kg. Mass defect 0.0254 u x 1.66 x 10-27 kgu Mass defect 4.2144 x 10-27 kg Now, we can calculate the energy released using Einstein's mass-energy equivalence principle Emc2, where c 3 x 108 ms. Energy released mass defect x speed of light2 Energy released 4.2144 x 10-27 kg x 3 x 108 ms2 Energy released 3.79296 x 10-10 J Lastly, convert the energy from joules to MeV 1 MeV 1.60218 x 10-13 J. Energy released 3.79296 x 10-10 J 1.60218 x 10-13 JMeV Energy released 2371.55 MeV Therefore, when 1 mol of deuterium is consumed in the fusion reaction, the amount of energy released is 2371.55 MeV."
            },
            {
                "key": 195,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Medium",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of Dark Matter and its significance in our understanding of the universe. What evidence do scientists have for the existence of Dark Matter, and how does it impact the overall structure and evolution of the universe?",
                "solution": "Dark Matter is a mysterious substance that does not emit, absorb, or reflect light, making it invisible and undetectable through telescopes. However, its existence can be inferred through its gravitational effects on visible matter and light. The significance of Dark Matter lies in its role in shaping the structure of the universe. It constitutes around 27 of the total mass-energy content of the universe. Without it, galaxies would not have enough mass to hold together, and the universe would look vastly different. Scientists have several pieces of evidence for Dark Matter's existence, such as gravitational lensing, the rotation curves of galaxies, and the cosmic microwave background radiation. These observations indicate that there must be a large amount of unseen mass influencing the visible matter in the universe. The impact of Dark Matter on the overall structure and evolution of the universe is profound. It provides the gravitational pull necessary to hold galaxies together, influences the formation of large-scale structures like galaxy clusters, and plays a crucial role in the cosmic web of filaments and voids that make up the universe. In conclusion, Dark Matter is a fundamental component of the universe, and its existence is key to our understanding of cosmic evolution. Scientists continue to study this mysterious substance to unlock its secrets and further our knowledge of the universe."
            },
            {
                "key": 344,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain how the phenomenon of diffraction is demonstrated in wave optics and how it impacts the quality of images produced by optical instruments. Provide examples to support your explanation.",
                "solution": "In wave optics, diffraction is the bending of waves around obstacles and the spreading of waves as they pass through apertures. This phenomenon is demonstrated in wave optics through the interference patterns produced when light waves pass through narrow slits or gratings. Diffraction impacts the quality of images produced by optical instruments by causing blurring and loss of resolution. When light waves diffract, they spread out and interfere with each other, leading to a decrease in the sharpness and clarity of the image produced. For example, in a camera, diffraction can cause the edges of an image to appear less defined, reducing the overall quality of the photograph. In a microscope, diffraction can limit the ability to distinguish fine details in a sample, affecting the accuracy of observations. Therefore, understanding the phenomenon of diffraction in wave optics is crucial for optimizing the performance of optical instruments and improving the quality of images produced."
            },
            {
                "key": 354,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "How does the phenomenon of diffraction contribute to the wave-like behavior of light as observed in biological systems? Provide specific examples to support your explanation.",
                "solution": "Diffraction is a wave phenomenon where light waves bend around obstacles and spread out when passing through narrow slits. In biological systems, diffraction of light is essential for various functions 1. Microscopy Diffraction allows for high-resolution imaging in biological samples using techniques like phase contrast microscopy and fluorescence microscopy. 2. Vision The diffraction of light in the eye's lens contributes to the focusing of light onto the retina, enabling us to perceive images clearly. 3. Photosynthesis Diffraction plays a role in the absorption of light by chlorophyll molecules during photosynthesis, converting light energy into chemical energy. In conclusion, the phenomenon of diffraction demonstrates the wave-like nature of light in biological systems by enabling crucial functions such as microscopy, vision, and photosynthesis."
            },
            {
                "key": 309,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "What is the relationship between the speed of a moving charged particle and the magnetic force experienced by the particle in a magnetic field?",
                "solution": "The relationship between the speed of a moving charged particle and the magnetic force experienced by the particle in a magnetic field is given by the equation F qvB Where - F is the magnetic force experienced by the particle, - q is the charge of the particle, - v is the speed of the particle, - B is the magnetic field strength. This equation shows that the magnetic force experienced by a moving charged particle is directly proportional to the speed of the particle. Therefore, as the speed of the particle increases, the magnetic force experienced by the particle in a magnetic field also increases. This relationship is fundamental in understanding the interaction between moving charged particles and magnetic fields in the context of moving charge and magnetism chapter."
            },
            {
                "key": 224,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain how the phenomenon of interference is observed in the double-slit experiment in the context of wave optics. Discuss the conditions required for constructive and destructive interference patterns to occur.",
                "solution": "In the double-slit experiment in wave optics, interference is observed when light from a single source passes through two closely spaced slits and interferes with each other. This interference creates a pattern of alternating bright and dark fringes on a screen placed behind the slits. Conditions for constructive interference 1. The path difference between the two waves from the double slits should be an integer multiple of the wavelength. 2. The waves should be in phase at the point of interference. Conditions for destructive interference 1. The path difference between the two waves should be an odd multiple of half-wavelength. 2. The waves should be out of phase at the point of interference. In summary, constructive interference occurs when waves are in phase and the path difference is an integer multiple of the wavelength, leading to bright fringes. Destructive interference occurs when waves are out of phase and the path difference is an odd multiple of half-wavelength, causing dark fringes to appear."
            },
            {
                "key": 298,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "A circular loop of radius R carries a current I. It is placed in a uniform magnetic field B making an angle with the normal to the plane of the loop. Calculate the magnitude and direction of the torque experienced by the loop due to the magnetic field. Given that the magnetic moment of the loop is M RI and the expression for torque is M x B.",
                "solution": "To calculate the torque experienced by the loop due to the magnetic field, we can use the formula for torque which is given as M x B, where M is the magnetic moment of the loop and B is the magnetic field. The magnetic moment of the loop, M, is given as M I Area enclosed by the loop, which in this case is R2. Therefore, M I R2. Given that the angle between the magnetic field B and the normal to the plane of the loop is , the torque experienced by the loop is M B sin, as torque is a vector quantity and depends on the angle between the magnetic moment and the magnetic field. Substitute the value of M as I R2 in the torque formula, we get I R2 B sin. Hence, the magnitude of the torque experienced by the loop due to the magnetic field is I R2 B sin. The direction of the torque can be determined using the right-hand rule. Point your right-hand fingers in the direction of the current I, then curl your fingers toward the direction of the magnetic field B. Your thumb will point in the direction of the torque."
            },
            {
                "key": 313,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "In the context of ray optics, explain the concept of total internal reflection and provide an example demonstrating its application in real-life scenarios.",
                "solution": "Total internal reflection is the phenomenon that occurs when a ray of light traveling from a denser medium to a rarer medium is reflected back into the denser medium instead of refracting. This happens when the angle of incidence is greater than the critical angle for the two media involved. One common real-life application of total internal reflection is in optical fibers used for communication. Optical fibers are designed to guide light along their length through repeated total internal reflection. This allows for the transmission of data over long distances without significant loss of signal strength. In conclusion, total internal reflection is a fundamental concept in ray optics with practical applications in various technological fields, such as telecommunication systems."
            },
            {
                "key": 288,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "In an experiment, a current-carrying wire is placed perpendicular to a uniform magnetic field. If the wire experiences a magnetic force of 2 N and the current flowing through the wire is 3 A, what is the magnitude and direction of the magnetic field strength? Given the angle between the current and magnetic field is 90 degrees",
                "solution": "To find the magnitude of the magnetic field strength B, we can use the formula for the magnetic force F on a current-carrying wire in a magnetic field F B I L sintheta Given F 2 N I 3 A theta 90 degrees Since sin90 degrees 1, the formula simplifies to 2 B 3 L 1 B 2 3 B 0.67 T Therefore, the magnitude of the magnetic field strength is 0.67 Tesla. The direction of the magnetic field strength can be determined using the right-hand rule. If you point your right thumb in the direction of the current flow and your fingers in the direction of the force on the wire, the palm of your hand will point in the direction of the magnetic field."
            },
            {
                "key": 243,
                "class": "CBSE 12th board",
                "subject": "biology",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of total internal reflection in the context of ray optics. How is it different from the phenomenon of refraction?",
                "solution": "In the context of ray optics, total internal reflection occurs when a light ray traveling from a denser medium to a rarer medium strikes the boundary between the two mediums at an angle greater than the critical angle. Instead of refracting into the second medium, the light ray reflects back into the denser medium. The critical angle is the angle of incidence that results in the refracted light ray traveling along the boundary between the two mediums. If the angle of incidence exceeds the critical angle, total internal reflection occurs. Total internal reflection differs from the phenomenon of refraction in that refraction involves the bending of light rays as they pass from one medium to another due to a change in the speed of light. On the other hand, total internal reflection results in the complete reflection of light within the same medium. In summary, total internal reflection is a phenomenon in ray optics where light rays reflect back into the denser medium when the angle of incidence exceeds the critical angle, unlike refraction which involves the bending of light rays at the boundary between two different mediums."
            },
            {
                "key": 208,
                "class": "CBSE 12th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "A circular coil of radius 10 cm and 20 turns carries a current of 5 A. It is placed in a uniform magnetic field of 0.2 T perpendicular to the plane of the coil. Calculate the magnetic dipole moment of the coil and the torque experienced by it when the coil makes an angle of 60 degrees with the magnetic field direction.",
                "solution": "1. Magnetic dipole moment nIA Where n number of turns in coil 20 turns I current flowing through coil 5 A A area of the coil r 0.1 0.01 m Substitute the values into the formula 20 5 0.01 1 A.m Therefore, the magnetic dipole moment of the coil is 1 A.m. 2. Torque B sin Where magnetic dipole moment 1 A.m B magnetic field strength 0.2 T angle between and B 60 degrees 3 radians Substitute the values into the formula 1 0.2 sin3 0.2 32 0.13 Nm Therefore, the torque experienced by the coil when it makes an angle of 60 degrees with the magnetic field direction is 0.13 Nm."
            },
            {
                "key": 295,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "How does the Doppler effect support the expanding universe theory according to the Big Bang model? Explain the relationship between redshift of distant galaxies and the expansion of the universe, and how this concept is crucial in understanding the origins and evolution of our universe.",
                "solution": "In the Big Bang model, the Doppler effect plays a crucial role in supporting the expanding universe theory. The redshift of light from distant galaxies is a result of the expansion of the universe. As these galaxies move away from us, the light they emit gets stretched or redshifted, which is in accordance with the Doppler effect. The relationship between redshift and the expansion of the universe is described by Hubble's Law, which states that the velocity at which a galaxy is receding from us is directly proportional to its distance. This concept is crucial in understanding the origins and evolution of the universe because it provides evidence that the universe is expanding and has been so since the Big Bang. By studying the redshift of distant galaxies, astronomers can trace the expansion of the universe back in time. This helps in developing our understanding of how the universe originated from a hot, dense state and has been expanding and evolving ever since, leading to the formation of galaxies, stars, and ultimately, life as we know it."
            },
            {
                "key": 228,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Explain the concept of paramagnetism and diamagnetism in terms of electronic configuration and give examples of substances exhibiting each type of magnetism.",
                "solution": "Paramagnetism and diamagnetism are two types of magnetism exhibited by substances based on their electronic configuration. Paramagnetism - Concept Substances that have unpaired electrons in their atomic or molecular orbitals exhibit paramagnetism. These unpaired electrons align their magnetic moments in the presence of an external magnetic field, causing the substance to be weakly attracted to the magnetic field. - Example Substances like oxygen O2, copper Cu, and aluminum Al exhibit paramagnetism due to the presence of one or more unpaired electrons in their electronic configuration. Diamagnetism - Concept Substances that have all paired electrons in their atomic or molecular orbitals exhibit diamagnetism. The paired electrons induce magnetic moments that oppose the external magnetic field, causing the substance to be weakly repelled by the magnetic field. - Example Substances like water H2O, bismuth Bi, and graphite exhibit diamagnetism due to the absence of unpaired electrons in their electronic configuration. In conclusion, paramagnetism and diamagnetism can be understood in terms of electronic configuration, where the presence or absence of unpaired electrons determines the magnetic behavior of a substance."
            },
            {
                "key": 346,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "FRICTION",
                "question": "How does friction play a role in the circulatory system of the human body, and how does it contribute to the flow of blood through the blood vessels? Provide an explanation using the concepts of static and dynamic friction in the context of blood flow dynamics.",
                "solution": "Friction plays a crucial role in the circulatory system of the human body by aiding in the flow of blood through the blood vessels. In the context of blood flow dynamics, static friction prevents the blood vessel walls from slipping against the blood, ensuring that the vessel remains intact and stable. On the other hand, dynamic friction between the blood and the vessel walls allows for the smooth movement of blood through the vessels, helping maintain a continuous flow. When the heart pumps blood, the friction between the blood and the vessel walls enables the blood to move forward efficiently. This frictional force helps in the regulation of blood pressure and ensures proper circulation throughout the body. In summary, friction is essential for maintaining the integrity of blood vessels and facilitating the flow of blood in the circulatory system."
            },
            {
                "key": 310,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the fundamental difference between atomic and nuclear physics? Provide an example of a phenomenon that is studied in each of these branches of physics.",
                "solution": "The fundamental difference between atomic and nuclear physics lies in the scale at which they operate. Atomic physics deals with the study of the structure and properties of atoms, while nuclear physics focuses on the study of the nucleus of atoms and subatomic particles. An example of a phenomenon studied in atomic physics is the emission of light by atoms when they transition from higher to lower energy levels, known as atomic emission spectra. On the other hand, an example of a phenomenon studied in nuclear physics is nuclear fission, where the nucleus of an atom splits into smaller nuclei, releasing a large amount of energy. In conclusion, atomic physics deals with the behavior of electrons in atoms, while nuclear physics deals with the behavior of the nucleus and subatomic particles within atoms."
            },
            {
                "key": 235,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "Explain the concept of nucleosynthesis in the evolution of the universe and discuss the role of various elemental abundances in providing insights into the early stages of cosmic evolution.",
                "solution": "Nucleosynthesis refers to the process by which elements are formed through nuclear reactions in stars and other cosmic phenomena. In the early stages of the universe, only light elements such as hydrogen and helium were formed through the Big Bang nucleosynthesis. As stars formed and evolved, heavier elements such as carbon, oxygen, and iron were synthesized in their cores through nuclear fusion processes. The elemental abundances observed in stars and other astronomical objects provide crucial insights into the early stages of cosmic evolution. By analyzing the relative amounts of different elements present in stars and galaxies, scientists can infer the conditions and processes that were prevalent in the universe in the past. This information helps in understanding the mechanisms that led to the formation of different elements and the evolution of galaxies over time. In summary, nucleosynthesis plays a key role in shaping the elemental composition of the universe, and studying elemental abundances provides valuable information about the early stages of cosmic evolution. Note This is a generic and concise solution for the given question at a high school level. More detailed explanations and examples can be included for a more in-depth understanding."
            },
            {
                "key": 358,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "How does the phenomenon of biomagnetism contribute to the understanding of magnetic fields in living organisms? Discuss the underlying principles of biomagnetism and its significance in the field of biology.",
                "solution": "Biomagnetism is the phenomenon where living organisms produce their own magnetic fields. This is primarily attributed to the presence of electrically charged particles in the body, such as ions and electrons, which create tiny currents that in turn generate magnetic fields. The underlying principles of biomagnetism lie in the fact that biological tissues and fluids are essentially conductive due to the presence of charged particles. These currents create magnetic fields that can be detected using specialized techniques like magnetoencephalography MEG and magnetocardiography MCG. The significance of biomagnetism in the field of biology is immense. It can provide valuable insights into various physiological and pathological processes in living organisms. For example, biomagnetic signals are used to study brain activity, cardiac function, and even diagnose certain medical conditions such as epilepsy and heart diseases. Overall, the study of biomagnetism has opened up new avenues for understanding the complex interplay between magnetic fields and living organisms, leading to significant advancements in biological research and medical diagnostics."
            },
            {
                "key": 331,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "What is the role of hormones in the communication system of the human body?",
                "solution": "In the communication system of the human body, hormones play a crucial role in transmitting signals and coordinating various functions. Hormones are chemical messengers secreted by endocrine glands that travel through the bloodstream to target tissues or organs. These hormones regulate processes such as growth, metabolism, reproduction, and response to stress. They help in maintaining homeostasis, the internal balance of the body, by controlling functions like heart rate, blood pressure, and blood sugar levels. In summary, hormones play a vital role in the communication system of the human body by transmitting signals and coordinating different processes to ensure the proper functioning of the body."
            },
            {
                "key": 322,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "What is the principle behind the working of a field-effect transistor FET? Explain the operation of a FET in terms of carrier concentration, applied voltage, and the formation of depletion region at the semiconductor-insulator interface. How does the FET amplify signals in electronic devices? Provide a detailed comparison between a FET and a bipolar junction transistor BJT in terms of their construction, working principle, and applications in electronic circuits.",
                "solution": "Principle behind the working of a field-effect transistor FET - FET operates on the principle of controlling the flow of charge carriers electrons or holes within a semiconductor channel using an electric field generated by the voltage applied to the gate terminal. Operation of a FET - When a voltage is applied to the gate terminal, it establishes an electric field that modulates the carrier concentration in the semiconductor channel. - Depending on the type of FET N-channel or P-channel, the applied voltage either attracts or repels carriers, causing a formation of a depletion region at the semiconductor-insulator interface. Amplification in FET - FET amplifies signals by controlling the current flowing through the channel in proportion to the input voltage applied at the gate terminal. Comparison between FET and BJT - Construction FET consists of three terminals - source, gate, and drain, while BJT has three terminals - emitter, base, and collector. - Working Principle FET operates by controlling the flow of current using an electric field. In contrast, BJT amplifies signals by controlling the flow of current using the injection and diffusion of charge carriers. - Applications FETs are commonly used in high-impedance or sensitive electronic circuits due to their high input impedance, while BJTs are often employed in low-power applications where current amplification is required. In conclusion, FETs and BJTs have distinct structures, working principles, and applications in electronic circuits, making them suitable for different types of electronic devices based on their specific requirements."
            },
            {
                "key": 327,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "In an electrostatic system, two point charges of 5 C and -3 C are placed 10 cm apart in air. Calculate the magnitude and direction of the electric field at a point 5 cm from the positive charge along the line joining the charges. Given that the permittivity of air is 8.85 times 10-12 C2Nm2. Hard level question requiring application of Coulomb's law and electric field calculation",
                "solution": "Given q1 5 C positive charge q2 -3 C negative charge r 10 cm 0.1 m distance between charges r1 5 cm 0.05 m distance from positive charge 8.85 x 10-12 C2Nm2 1. Calculate the electric field due to q1 at the point E1 k q1 r12 E1 9 x 109 5 0.052 E1 9 x 1012 NC 2. Calculate the electric field due to q2 at the same point E2 k q2 r22 by symmetry, since E2 and E1 will be in opposite directions, we can directly calculate it E2 9 x 109 3 0.12 E2 2.7 x 1010 NC 3. Calculate the net electric field at the point Enet E1 - E2 Enet 9 x 1012 - 2.7 x 1010 Enet 8.73 x 1012 NC 4. Determine the direction of the electric field The electric field at the point will be directed towards the positive charge as the positive charge creates an outward electric field while the negative charge creates an inward electric field. Hence, the electric field at the point 5 cm from the positive charge along the line joining the charges is 8.73 x 1012 NC directed towards the positive charge."
            },
            {
                "key": 338,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "MAGNETISM AND MATTER",
                "question": "Which of the following statements best describes diamagnetic materials in the context of magnetism and matter? A Diamagnetic materials are attracted towards a magnetic field. B Diamagnetic materials are repelled by a magnetic field. C Diamagnetic materials have strong alignment of magnetic moments. D Diamagnetic materials have weak alignment of magnetic moments.",
                "solution": "The correct answer is B Diamagnetic materials are repelled by a magnetic field. Diamagnetic materials have weak alignment of magnetic moments and are therefore repelled by a magnetic field."
            },
            {
                "key": 233,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "Explain the phenomenon of total internal reflection in terms of critical angle and refractive indices of two media, providing a real-life example where total internal reflection is utilized.",
                "solution": "Total internal reflection is a phenomenon that occurs when light traveling from a denser medium to a rarer medium strikes the interface at an angle greater than the critical angle, resulting in all the light being reflected back into the denser medium. Mathematically, the critical angle c can be calculated using the formula sinc n2n1, where n1 is the refractive index of the denser medium and n2 is the refractive index of the rarer medium. If the angle of incidence is greater than the critical angle, total internal reflection takes place. One real-life example where total internal reflection is utilized is in the optical fibers used for communication. Light signals are transmitted through optical fibers, which have a core denser medium surrounded by a cladding rarer medium. When the light signal hits the core-cladding interface at an angle greater than the critical angle, total internal reflection occurs, allowing the light signal to travel long distances without significant loss of intensity. In conclusion, total internal reflection can be explained in terms of critical angle and refractive indices of the two media, and it finds practical applications in optical fibers for communication purposes."
            },
            {
                "key": 237,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ELECTROSTATICS",
                "question": "Explain the concept of electric potential and how it is related to work done in moving a charge in an electric field. Provide a numerical example to illustrate this relationship.",
                "solution": "Electric potential is the amount of work done in bringing a unit positive charge from infinity to a point in an electric field. It is denoted by the symbol V and is measured in volts. The electric potential at a point in an electric field is directly related to the work done in moving a charge to that point. The relationship is given by the formula V fracWq Where V is electric potential, W is the work done, and q is the charge. When a charge is moved against an electric field from point A to point B, work is done on the charge. The work done in moving a charge in an electric field is equal to the change in electric potential energy of the charge. This can be calculated using the formula W q cdot Delta V Let's consider a scenario where a charge of 5 C is moved from a point where the electric potential is 10 V to a point where the electric potential is 20 V. The work done in moving the charge can be calculated as Delta V Vtextfinal - Vtextinitial 20 V - 10 V 10 V W 5 C cdot 10 V 50 J Therefore, the work done in moving the charge of 5 C from a point with an electric potential of 10 V to a point with an electric potential of 20 V is 50 J. This illustrates how electric potential is related to the work done in moving a charge in an electric field."
            },
            {
                "key": 223,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "In the context of Ray Optics, explain how the concept of total internal reflection is applied in optical fibers to transmit signals over long distances with minimal loss of information. Provide a real-life example to illustrate this application.",
                "solution": "In Ray Optics, total internal reflection is utilized in optical fibers to transmit signals over long distances with minimal loss of information. Total internal reflection occurs when a light ray travelling from a denser medium to a rarer medium is reflected back into the denser medium, rather than being refracted out. This phenomenon helps to guide the light along the optical fiber without significant loss of intensity. In optical fibers, a core made of a high-refractive-index material is surrounded by a cladding of lower refractive index material. When a light signal enters the core of the fiber at a shallow angle, it undergoes total internal reflection at the core-cladding interface and continues to propagate along the fiber. This allows the signal to travel long distances without losing its strength, making optical fibers an efficient medium for transmitting data. A real-life example of this application is the use of optical fibers in telecommunication networks. These networks rely on optical fibers to transmit vast amounts of data over long distances with minimal signal loss. The total internal reflection within the optical fibers ensures that the signals reach their destination intact and without significant degradation. Overall, total internal reflection in optical fibers is a crucial concept in Ray Optics that enables efficient transmission of signals over long distances, making it a vital component in modern communication systems."
            },
            {
                "key": 119,
                "class": "CBSE 11th board",
                "subject": "physics",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A proton with an initial velocity of 2 x 106 ms moves perpendicular to a magnetic field of 0.6 T. Calculate the radius of the helical path traced by the proton after traveling 5 cm in the magnetic field. Given Mass of proton 1.67 x 10-27 kg, Charge of proton 1.6 x 10-19 C",
                "solution": "Given Initial velocity, vi 2 times 106 , textms Magnetic field, B 0.6 , textT Distance traveled, d 0.05 , textm Mass of proton, m 1.67 times 10-27 , textkg Charge of proton, q 1.6 times 10-19 , textC Formula for the radius of a helical path traced by a charged particle moving perpendicular to a magnetic field r fracm cdot vq cdot B First, we need to calculate the final velocity vf of the proton after traveling 5 cm 0.05 m in the magnetic field using the formula vf sqrtvi2 2 cdot a cdot d where acceleration a is given by a fracq cdot Bm Substituting the given values a frac1.6 times 10-19 times 0.61.67 times 10-27 5.714 times 107 , textms2 vf sqrt2 times 1062 2 times 5.714 times 107 times 0.05 vf sqrt4 times 1012 5.714 times 106 vf approx 2.002 times 106 , textms Now, substitute v vf into the formula for r gives r frac1.67 times 10-27 times 2.002 times 1061.6 times 10-19 times 0.6 r frac3.341 times 10-219.6 times 10-20 r approx 0.348 , textm Therefore, the radius of the helical path traced by the proton after traveling 5 cm in the magnetic field is 0.348 m."
            },
            {
                "key": 217,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Easy",
                "chapter": "ELECTROSTATICS",
                "question": "Define the term 'electrostatics' and explain how it is different from current electricity in terms of the movement of charges. CBSE 12th board, Chemistry, Easy level, Electrostatics chapter",
                "solution": "Electrostatics is the branch of physics that deals with the study of electric charges at rest. It involves the phenomena associated with stationary or slow-moving electric charges. In terms of the movement of charges, electrostatics and current electricity are different. In electrostatics, charges are at rest or stationary, and there is no flow of charge. The charges are held in place by the electric field. On the other hand, in current electricity, charges are in motion, and there is a continuous flow of charge through a conductor. The movement of charges in current electricity results in the generation of electric current. Therefore, the key difference lies in the movement of charges - electrostatics deals with stationary charges, while current electricity involves the flow of charges."
            },
            {
                "key": 343,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "RAY OPTICS",
                "question": "Explain the concept of total internal reflection in the context of ray optics, and give an example of its practical application in biology or medical field.",
                "solution": "Total internal reflection is a phenomenon that occurs when a light ray traveling from a denser medium to a rarer medium strikes the boundary between the two mediums at an angle greater than the critical angle. Instead of refracting out of the denser medium, the light ray reflects back into the denser medium. This phenomenon is crucial in various optical devices and applications. One practical application of total internal reflection in the medical field is in fiber optics used for endoscopy. In endoscopy, fiber optic cables are used to transmit light and images inside the body for diagnostic and surgical purposes. The fibers inside the cable are designed to allow total internal reflection of light so that the images can be transmitted efficiently along the length of the cable without significant loss of intensity. By utilizing total internal reflection, medical professionals can obtain clear and accurate images of internal organs and tissues. Overall, the concept of total internal reflection plays a vital role in various optical applications, including those used in biology and the medical field, to enhance imaging techniques and facilitate diagnosis and treatment."
            },
            {
                "key": 229,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A proton moves with a velocity of 4 x 106 ms in the presence of a magnetic field of 0.6 T. Calculate the magnetic force acting on the proton if the angle between the velocity of the proton and the magnetic field is 30 degrees. Given the charge of proton, q 1.6 x 10-19 C.",
                "solution": "1. Determine the magnetic force acting on the proton Given - Velocity of the proton v 4 x 106 ms - Magnetic field strength B 0.6 T - Charge of proton q 1.6 x 10-19 C - Angle between velocity and magnetic field 30 degrees 2. Calculate the magnetic force using the formula F q v B sin - Substitute the values into the formula F 1.6 x 10-19 C 4 x 106 ms 0.6 T sin30 degrees F 1.6 x 10-19 4 x 106 0.6 0.5 F 2.88 x 10-13 N 3. So, the magnetic force acting on the proton is 2.88 x 10-13 N."
            },
            {
                "key": 236,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "FRICTION",
                "question": "Discuss the various factors affecting friction between two surfaces at the atomic level and explain how each factor contributes to the overall frictional force experienced between the surfaces.",
                "solution": "At the atomic level, there are various factors that affect the friction between two surfaces 1. Surface roughness The roughness of the surfaces determines the amount of actual contact between them, affecting the frictional force. Irregularities in the surface create interlocking points, increasing friction. 2. Adhesion Adhesion refers to the attraction between molecules of different substances. Strong adhesion between the molecules of two surfaces results in higher frictional force. 3. Surface energy The energy required to overcome the intermolecular forces acting between the atoms and molecules on the surface affects friction. Higher surface energy leads to higher frictional force. 4. Temperature Temperature affects the motion of atoms and molecules, which in turn influences the friction between two surfaces. Higher temperatures can reduce friction by increasing the mobility of molecules. 5. Lubricants The presence of lubricants can reduce friction by forming a protective layer between the surfaces, preventing direct contact and reducing the frictional force. In conclusion, factors such as surface roughness, adhesion, surface energy, temperature, and lubricants play a crucial role in determining the frictional force experienced between two surfaces. These factors interact at the atomic level to influence the overall friction between surfaces."
            },
            {
                "key": 314,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "WAVE OPTICS",
                "question": "Explain how interference patterns are formed in Young's double-slit experiment and discuss the factors that affect the visibility of fringes.",
                "solution": "1. In Young's double-slit experiment, interference patterns are formed when light from a single source illuminates two closely spaced slits. The light waves passing through the two slits interfere with each other, resulting in the formation of alternate bright and dark fringes on the screen placed behind the slits. 2. Factors that affect the visibility of fringes in the interference pattern include the wavelength of the light used, the distance between the two slits d, and the distance between the screen and the slits D. 3. Visibility of fringes is maximum when the wavelength of light is smaller, the slit separation distance is smaller, and the screen is placed at a larger distance from the slits. 4. The contrast of the fringes also depends on the intensity of the light source and the uniformity of the slit widths. 5. Overall, careful consideration of these factors is crucial to obtain clear and distinct interference patterns in Young's double-slit experiment."
            },
            {
                "key": 333,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "RAY OPTICS",
                "question": "How does the phenomenon of refraction explain the bending of light when it passes from one medium to another?",
                "solution": "Refraction is the phenomenon of bending of light when it passes from one medium to another. This occurs due to the change in the speed of light as it travels from one medium to another with different optical densities. When light enters a medium of different optical density, its speed changes, causing it to bend towards or away from the normal line at the interface. The bending of light during refraction can be explained by Snell's Law, which states that the ratio of the sine of the angle of incidence to the sine of the angle of refraction is a constant value for a given pair of media. This constant value is known as the refractive index of the medium. In simple terms, when light travels from a less dense medium to a denser medium, it bends towards the normal line. Conversely, when light travels from a denser medium to a less dense medium, it bends away from the normal line. This bending of light during refraction helps us understand how images are formed by lenses and prisms, and plays a crucial role in various optical phenomena."
            },
            {
                "key": 353,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "How does the human eye adjust its focal length to focus on objects at different distances using the principles of ray optics? Provide a detailed explanation of the role of the lens, ciliary muscles, and the process of accommodation in achieving this visual adaptation.",
                "solution": "The human eye adjusts its focal length to focus on objects at different distances through a process called accommodation. This process involves the coordination of the lens and ciliary muscles. 1. Lens The lens of the human eye is a convex lens that can change its shape to alter its focal length. When the eye needs to focus on distant objects, the lens becomes thin, allowing parallel rays of light to focus directly on the retina. When focusing on nearby objects, the lens becomes thicker to increase its refractive power and bring the object into focus on the retina. 2. Ciliary muscles The ciliary muscles are located around the lens and play a crucial role in accommodation. When the eye needs to focus on nearby objects, the ciliary muscles contract, causing the suspensory ligaments to relax. This allows the lens to become thicker and increase its refractive power. Conversely, when focusing on distant objects, the ciliary muscles relax, allowing the suspensory ligaments to pull the lens into a thinner shape. The process of accommodation involves the coordination between the lens and ciliary muscles to adjust the focal length of the eye in response to different object distances. This enables the eye to form clear images on the retina for objects at various distances, ensuring sharp vision."
            },
            {
                "key": 222,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the formation of a P-N junction in a semiconductor and discuss the role of majority and minority charge carriers in its functioning.",
                "solution": "Formation of P-N junction in a semiconductor is achieved by bringing p-type and n-type semiconductors into close contact. In a p-type semiconductor, there is an excess of positively charged holes, while in an n-type semiconductor, there is an excess of negatively charged electrons. When the p-type and n-type semiconductors are joined, the holes in the p-type semiconductor migrate towards the n-type side and recombine with the excess electrons there. This creates a region near the junction that is depleted of charge carriers, known as the depletion region. This region acts as a barrier to further movement of charge carriers. The majority charge carriers in a P-N junction are the majority type carriers of each semiconductor - holes in the p-type region and electrons in the n-type region. The minority charge carriers are the opposite type carriers that exist in smaller quantities - electrons in the p-type region and holes in the n-type region. When a potential difference is applied across the P-N junction forward bias, it allows the majority charge carriers to overcome the barrier in the depletion region and flow across the junction, creating a current. This is how a P-N junction acts as a diode, allowing current to flow in one direction only. In summary, the formation of a P-N junction involves the migration and recombination of charge carriers, creating a depletion region that acts as a barrier. The majority charge carriers play a crucial role in creating current flow across the junction under forward bias."
            },
            {
                "key": 329,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "A charged particle with a charge of 2e and a mass of 3.2 x 10-26 kg moves with a velocity of 5 x 105 ms in a magnetic field of 0.5 T. Calculate the radius of the circular path that the particle follows due to the magnetic field. Given e 1.6 x 10-19 C",
                "solution": "Given Charge of the particle, q 2e 2 1.6 x 10-19 C 3.2 x 10-19 C Mass of the particle, m 3.2 x 10-26 kg Velocity of the particle, v 5 x 105 ms-1 Magnetic field, B 0.5 T The radius of the circular path that the particle follows due to the magnetic field can be calculated using the formula for the radius of the circular motion of a charged particle in a magnetic field r mv qB Substitute the given values into the formula r 3.2 x 10-26 kg 5 x 105 ms-1 3.2 x 10-19 C 0.5 T r 1.6 x 10-20 kg ms-1 1.6 x 10-19 C T r 0.1 m 10 cm Therefore, the radius of the circular path that the particle follows is 10 cm."
            },
            {
                "key": 292,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the operation of an NPN transistor in the active region and derive the expression for the current gain . Describe how the transistor amplifies a small input signal in a common-emitter configuration.",
                "solution": "In the active region, an NPN transistor operates as a current amplifier. When a small forward current Ib is applied to the base terminal, it causes a larger current Ic to flow from the collector to the emitter terminals. This occurs due to the transistor's ability to amplify current by controlling the amount of collector current flowing between the collector and emitter terminals. Expression for Current Gain The current gain of an NPN transistor in the active region can be derived using the following formula Ic Ib Where - is the current gain - Ic is the collector current - Ib is the base current Explanation of Transistor Amplification In a common-emitter configuration, the small input signal applied to the base terminal modulates the transistor's conductivity, causing a larger output signal to appear across the load resistor connected to the collector terminal. This amplification process occurs due to the relationship between the base current Ib, collector current Ic, and the current gain . As the base current Ib increases, the transistor allows more collector current Ic to flow, resulting in amplification of the input signal. The amplification factor is determined by the current gain , and the overall output signal is a magnified version of the input signal due to the transistor's current amplification capability. In summary, the transistor amplifies a small input signal in a common-emitter configuration by modulating the collector current in response to the base current, resulting in an amplified output signal across the load resistor. This explanation provides a general understanding of the operation and amplification process of an NPN transistor in the active region within a common-emitter configuration."
            },
            {
                "key": 330,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "In a radioactive decay process, a nucleus of element X undergoes alpha decay to produce a nucleus of element Y. If the atomic number of X is 92 and the atomic number of Y is 90, calculate the energy released in MeV during this alpha decay process. Given that the mass of element X is 238 amu and the mass of element Y is 234 amu. Hint Use the mass-energy equivalence formula Emc2, where c is the speed of light in a vacuum",
                "solution": "1. Determine the number of protons and neutrons in element X 92 protons neutrons 238 amu Protons atomic number 92 Neutrons 238 - 92 146 2. For alpha decay - An alpha particle consists of 2 protons and 2 neutrons. - Element X - 92 protons 146 neutrons - Element Y - 90 protons 144 neutrons 3. Calculate the mass defect, m mass of X - mass of Y mass of alpha particle m 238 - 234 4 0 amu 4. Calculate the energy released, E m c2 E 0 3x1082 0 MeV Therefore, no energy is released during this alpha decay process."
            },
            {
                "key": 221,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the working principle of an AM receiver and discuss how modulation and demodulation take place in the communication system.",
                "solution": "An AM Amplitude Modulation receiver works on the principle of extracting the original message signal from the received amplitude-modulated signal. The basic components of an AM receiver include an antenna to receive the modulated signal, a tuner to select the desired frequency, a demodulator to extract the baseband signal, and an audio amplifier to amplify the audio signal for loudspeaker output. Modulation is the process of varying the amplitude of the carrier wave based on the message signal. In the case of AM, the amplitude of the carrier wave is varied in proportion to the instantaneous amplitude of the message signal. Demodulation, on the other hand, is the process of recovering the original message signal from the modulated carrier wave. In an AM receiver, this is achieved by using a diode detector or envelope detector which rectifies the modulated signal to recover the original message signal. In a communication system, modulation is used to convert the baseband signal message signal into a suitable form for transmission over a medium, while demodulation is used to extract the original message signal at the receiver end. Modulation and demodulation are essential processes in communication systems to transmit and receive information effectively. In conclusion, an AM receiver operates by extracting the original message signal from the received amplitude-modulated signal using demodulation techniques. Modulation and demodulation play crucial roles in the communication system by enabling the transmission and reception of information over long distances."
            },
            {
                "key": 240,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Discuss the concept of radioactive decay in terms of its types and the mathematical relationship governing the decay process. Provide examples of each type of radioactive decay and explain how half-life plays a crucial role in understanding the decay kinetics.",
                "solution": "Radioactive decay is the spontaneous emission of particles or radiation from an unstable atomic nucleus to attain a stable state. There are three main types of radioactive decay alpha decay, beta decay, and gamma decay. 1. Alpha Decay In alpha decay, an alpha particle consisting of two protons and two neutrons is emitted from the nucleus. The parent element loses 2 protons and 2 neutrons in the process. An example is the decay of Uranium-238 U-238 into Thorium-234 Th-234 by emitting an alpha particle. 2. Beta Decay In beta decay, a neutron in the nucleus is transformed into a proton, electron beta particle, and an antineutrino or neutrino. Beta decay can be of two types - beta-minus decay emission of an electron or beta-plus decay emission of a positron. An example is the decay of Carbon-14 C-14 into Nitrogen-14 N-14 by emitting a beta particle. 3. Gamma Decay In gamma decay, a nucleus in an excited state emits a gamma ray photon to reach a lower energy state without changing its atomic number or mass number. An example is the decay of Cobalt-60 Co-60 to Nickel-60 Ni-60 by emitting a gamma ray photon. The decay process is governed by the radioactive decay law, which states that the rate of decay of a radioactive substance is directly proportional to the number of radioactive nuclei present. Mathematically, this is given by the equation Nt N0 times e-lambda t where - Nt is the number of radioactive nuclei at time t, - N0 is the initial number of radioactive nuclei, - lambda is the decay constant, - e is the base of the natural logarithm, and - t is time. Half-life t12 is the time taken for half of the radioactive nuclei in a sample to decay. It plays a crucial role in understanding decay kinetics as it helps in determining the rate of decay and predicting the amount of radioactive material remaining over time. In conclusion, understanding the types of radioactive decay, the radioactive decay law, and the concept of half-life is essential in studying atomic and nuclear physics and explaining the behavior of radioactive substances."
            },
            {
                "key": 347,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "ELECTROSTATICS",
                "question": "In the context of biology and electrostatics, explain how the concept of electrostatic forces applies to the functioning of biological systems such as nerve cells and muscle contractions. Additionally, discuss the role of ion channels and membrane potentials in these processes.",
                "solution": "In biology, electrostatic forces play a crucial role in the functioning of biological systems such as nerve cells and muscle contractions. These forces are responsible for the transmission of signals and contraction of muscle fibers. Nerve cells use electrostatic forces to transmit signals along their length. When a nerve cell is at rest, there is a difference in charge across its membrane known as the membrane potential. This potential is maintained by ion channels that allow specific ions to pass through the membrane, creating an electrical gradient. When a signal is received by the nerve cell, ion channels open and allow ions to flow across the membrane, creating an action potential. This electrical impulse travels along the nerve cell due to the electrostatic forces generated by the movement of ions. In muscle contractions, electrostatic forces play a role in the interaction between actin and myosin filaments. These forces help in the sliding of filaments, leading to muscle contraction. Additionally, the release of calcium ions from the sarcoplasmic reticulum is also driven by electrostatic forces, triggering the contraction process. Overall, the concept of electrostatic forces, ion channels, and membrane potentials are crucial in the functioning of biological systems like nerve cells and muscle contractions, ensuring proper signaling and coordination in the body."
            },
            {
                "key": 340,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Easy",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "What is the process by which a radioactive nucleus emits an alpha particle? Explain the role of the strong nuclear force in this process.",
                "solution": "- The process in which a radioactive nucleus emits an alpha particle is called alpha decay. - During alpha decay, a radioactive nucleus releases an alpha particle, which is composed of 2 protons and 2 neutrons. - The strong nuclear force, one of the four fundamental forces of nature, plays a crucial role in holding the protons and neutrons together in the nucleus. - In alpha decay, the strong nuclear force overcomes the electrostatic repulsion between the protons in the nucleus, allowing the alpha particle to be emitted. - This process helps in achieving a more stable configuration for the nucleus, as the emitted alpha particle reduces the overall energy of the nucleus. This is a simplified explanation of the process of alpha decay and the role of the strong nuclear force in it."
            },
            {
                "key": 282,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "A p-n junction diode is forward biased with a voltage of 0.7V applied across it. If the electron and hole concentrations in the n-region are 1016cm3 and 1018cm3 respectively, calculate the total current flowing through the diode. Given that the electron and hole diffusion coefficients are 30 cm2s and 12 cm2s respectively. Consider the area of the diode to be 1 mm2.",
                "solution": "To calculate the total current flowing through the p-n junction diode when forward biased with 0.7V applied across it, follow these steps 1. Calculate the electron and hole diffusion current densities using the given diffusion coefficients Jn q cdot Dn cdot n cdot fracdPdx Jp q cdot Dp cdot p cdot fracdPdx where, Jn electron diffusion current density Jp hole diffusion current density q charge of an electron Dn electron diffusion coefficient Dp hole diffusion coefficient n electron concentration p hole concentration fracdPdx change in hole concentration per unit length Given q 1.6 times 10-19 C Dn 30 cm2s Dp 12 cm2s n 1016 cm-3 p 1018 cm-3 L 1 mm 0.1 cm area of the diode 2. Calculate the total current flowing through the diode using the equation I q cdot A cdot Jn Jp where, I total current A area of the diode Substitute the calculated values in the above equations to find the total current flowing through the diode when forward biased with 0.7V applied across it."
            },
            {
                "key": 341,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain how the nervous and endocrine systems work together to coordinate communication within the human body. Include examples of feedback mechanisms to support your explanation.",
                "solution": "The nervous and endocrine systems work together to coordinate communication within the human body. The nervous system uses electrical impulses to transmit messages quickly between different parts of the body. For example, when you touch a hot stove, your nervous system immediately sends a signal to your brain to move your hand away from the heat. On the other hand, the endocrine system uses hormones to communicate more slowly but with longer-lasting effects. For instance, when you are in a stressful situation, the endocrine system releases adrenaline into the bloodstream, increasing your heart rate and preparing your body for fight or flight. Feedback mechanisms play a crucial role in maintaining balance within the body. For instance, when blood sugar levels rise after a meal, the pancreas releases insulin to lower the levels back to normal. This is an example of a negative feedback mechanism that helps in regulating blood sugar levels. In conclusion, the nervous and endocrine systems work in tandem to ensure effective communication within the human body, allowing for swift responses to stimuli and maintaining internal balance through feedback mechanisms."
            },
            {
                "key": 360,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "How does the process of nuclear fission differ from nuclear fusion in terms of energy release and the elements involved? Provide detailed explanations for each process and discuss the significance of nuclear reactions in power generation and scientific research.",
                "solution": "Nuclear fission is the splitting of a heavy nucleus into two or more lighter nuclei, releasing a large amount of energy. This process involves elements like uranium-235 or plutonium-239. On the other hand, nuclear fusion is the combining of two light nuclei to form a heavier nucleus, also releasing a significant amount of energy. Elements involved in nuclear fusion are typically isotopes of hydrogen like deuterium and tritium. In terms of energy release, nuclear fusion releases more energy compared to nuclear fission. Fusion reactions have the potential to release much greater amounts of energy because they involve combining lighter nuclei to form heavier ones, in contrast to fission reactions where heavy nuclei are split into lighter ones. Nuclear reactions, whether fission or fusion, are significant in power generation and scientific research. Nuclear fission is commonly used in nuclear power plants to generate electricity, while research into controlled nuclear fusion aims to develop a sustainable and clean energy source for the future. Additionally, nuclear reactions are also used in scientific research to study the fundamental properties of matter and the universe, as well as in the production of medical isotopes for diagnostic and therapeutic purposes. In conclusion, nuclear fission and fusion have distinct differences in energy release and elements involved, with both processes playing crucial roles in power generation, scientific research, and various other fields."
            },
            {
                "key": 312,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "In semiconductor electronics, explain the concept of the 'pn junction' and how it functions as a crucial component in semiconductor devices. Provide an example of a semiconductor device that utilizes the pn junction and how it enhances the device's functionality.",
                "solution": "In semiconductor electronics, a pn junction is formed by joining a p-type semiconductor which has excess positive charge carriers with an n-type semiconductor which has excess negative charge carriers. This creates a depletion region at the junction, where the majority carriers from each side recombine, resulting in a barrier potential. The pn junction functions as a crucial component in semiconductor devices by enabling the control and manipulation of electric current. When a forward bias voltage is applied across the junction, it reduces the barrier potential, allowing current to flow easily. Conversely, a reverse bias voltage increases the barrier potential, blocking the current flow. One example of a semiconductor device that utilizes the pn junction is a diode. A diode allows current to flow in only one direction, from the p-type region to the n-type region. This property enables diodes to be used in rectifiers, which convert AC current to DC, as well as in signal demodulation and voltage regulation circuits. Overall, the pn junction plays a fundamental role in semiconductor devices by facilitating the control of current flow and enabling the functionality of various electronic components."
            },
            {
                "key": 293,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "physics",
                "level": "Hard",
                "chapter": "RAY OPTICS",
                "question": "A convex lens with a focal length of 10 cm is placed in a medium of refractive index 1.5. An object is placed 20 cm in front of the lens. Calculate the position and nature of the image formed by the lens. Consider all possible scenarios and discuss the conditions under which each scenario occurs.",
                "solution": "To solve this problem in the context of ray optics, we can use the lens formula dfrac1f dfrac1v - dfrac1u, where f is the focal length, v is the image distance, and u is the object distance. Given that the focal length f 10 cm and the object distance u -20 cm since the object is placed in front of the lens, we can substitute these values into the lens formula to find the image distance v. dfrac110 dfrac1v dfrac120 Solving this equation will give us the position of the image formed by the lens. Depending on the relative positions of the object and the lens, the image can be real or virtual, upright or inverted, and magnified or diminished. To determine the nature of the image, we can use the magnification formula M -dfracvu, where M is the magnification. By calculating the magnification, we can conclude whether the image is upright or inverted and magnified or diminished. In summary, by applying the lens formula and magnification formula, we can calculate the position and nature of the image formed by the convex lens under the given conditions."
            },
            {
                "key": 239,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain the phenomenon of electromagnetic induction in detail, discussing Faraday's law and Lenz's law. How is the direction of induced current determined in a moving coil apparatus? Support your answer with relevant examples and equations.",
                "solution": "Electromagnetic induction is a process in which a changing magnetic field induces an electromotive force EMF in a conductor, resulting in the generation of an electric current. This phenomenon is governed by Faraday's law and Lenz's law. Faraday's law states that the magnitude of the induced EMF is directly proportional to the rate of change of magnetic flux through a coil. Mathematically, it can be expressed as EMF -ddt where EMF is the electromotive force, ddt represents the rate of change of magnetic flux, and the negative sign indicates the direction of the induced EMF. Lenz's law states that the induced current will always flow in a direction so as to oppose the change that produced it. This law ensures that energy is conserved and reflects the principle of conservation of energy. To determine the direction of the induced current in a moving coil apparatus, the right-hand rule can be used. If you curl the fingers of your right hand in the direction of the magnetic field lines and extend your thumb, the direction in which your thumb points represents the direction of the induced current. For example, consider a coil moving through a magnetic field. As the coil moves, the magnetic flux through the coil changes, inducing an EMF and subsequently an induced current. The direction of this induced current can be determined using Lenz's law and the right-hand rule. In conclusion, electromagnetic induction is a crucial concept in physics, explaining the generation of electric currents through changing magnetic fields. Understanding Faraday's law and Lenz's law helps in predicting the direction of induced currents in various scenarios."
            },
            {
                "key": 311,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "COMMUNICATION SYSTEM",
                "question": "Explain the concept of modulation in communication systems. How does modulation help in transmitting signals over long distances efficiently? Provide examples of different types of modulation techniques used in modern communication systems.",
                "solution": "Modulation is the process of varying one or more properties of a high-frequency periodic waveform, known as the carrier signal, with a low-frequency signal, called the modulating signal. This results in encoding the information from the modulating signal onto the carrier signal, making it suitable for long-distance transmission. Modulation helps in transmitting signals over long distances efficiently by allowing the signal to be carried over long distances with minimal loss of signal strength and without interference from other signals. This is achieved by adjusting the characteristics of the carrier signal based on the modulating signal. There are various types of modulation techniques used in modern communication systems, including 1. Amplitude Modulation AM In AM, the amplitude of the carrier signal is varied in proportion to the waveform of the modulating signal. 2. Frequency Modulation FM In FM, the frequency of the carrier signal is varied based on the modulating signal. 3. Phase Modulation PM PM involves varying the phase of the carrier signal according to the modulating signal. 4. Pulse Amplitude Modulation PAM PAM is a form of digital modulation where the signal is converted into a series of pulses with varying amplitudes. 5. Quadrature Amplitude Modulation QAM QAM is a combination of both amplitude and phase modulation, allowing for the transmission of data in both dimensions simultaneously. By utilizing these modulation techniques, modern communication systems can efficiently transmit signals over long distances, ensuring clear and reliable communication."
            },
            {
                "key": 238,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "MAGNETISM AND MATTER",
                "question": "CBSE 12th Chemistry, Hard Level, Magnetism and Matter Two identical metallic spheres are moving towards each other along the same line. Sphere A carries a charge of 2 C and sphere B carries a charge of -3 C. The spheres experience a force of 0.1 N towards each other. If the initial velocity of sphere A is 5 ms and that of sphere B is 3 ms, calculate the time taken for the spheres to collide. Given Permittivity of free space 8.85 times 10-12 , textC2textN m2 and mass of each sphere 0.2 kg",
                "solution": "To find the time taken for the spheres to collide, we need to first calculate the initial acceleration of each sphere due to the electrostatic force. Given data Charge on sphere A q1 2 C Charge on sphere B q2 -3 C Force F 0.1 N Initial velocity of sphere A u1 5 ms Initial velocity of sphere B u2 3 ms Permitivity of free space 0 8.85 10-12 C2N m2 Mass of each sphere m 0.2 kg The force between the spheres is given by Coulomb's law F frack cdot q1 cdot q2r2 Where k is Coulomb's constant k 1 40. We know, F ma where a is the acceleration Since both spheres have the same mass, the acceleration of each sphere is given by a fracFm We can solve for a using the given data. Once we have the acceleration, we can find the time taken for the spheres to collide using the kinematic equation v u at Where v final velocity 0 ms at collision u initial velocity a acceleration t time Calculate the acceleration using the formula, substitute it into the kinematic equation, and solve for t to find the time taken for the spheres to collide. This approach provides a systematic and structured way to solve the problem effectively, considering all relevant concepts related to magnetism and matter at the 12th grade level."
            },
            {
                "key": 230,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Medium",
                "chapter": "ATOMIC AND NUCLEAR PHYSICS",
                "question": "Given that the nuclear radius of an atom is approximately 1 times 10-15 meters, calculate the nuclear volume of a gold atom with atomic number 79 and atomic mass 197. Determine the density of the nucleus in kgm3 if the mass of an individual nucleon is 1.67 times 10-27 kg.",
                "solution": "To calculate the nuclear volume of a gold atom, we first need to find the number of nucleons in the nucleus, which is given by its atomic mass. Number of nucleons Atomic mass 197 Given that the nuclear radius is 1 x 10-15 meters, the nuclear volume can be calculated as Volume 43 nuclear radius3 Volume 43 1 x 10-153 Volume 43 3.14 1 x 10-45 Volume 4.19 x 10-45 m3 Next, to determine the density of the nucleus, we need to find the mass of the nucleus. Since the mass of an individual nucleon is given as 1.67 x 10-27 kg, the total mass of the nucleus can be calculated as Mass Number of nucleons Mass of an individual nucleon Mass 197 1.67 x 10-27 Mass 3.29 x 10-25 kg Density of the nucleus can be calculated using the formula Density Mass Volume Density 3.29 x 10-25 4.19 x 10-45 Density 7.85 x 1019 kgm3 Therefore, the nuclear volume of the gold atom is 4.19 x 10-45 m3 and the density of the nucleus is 7.85 x 1019 kgm3."
            },
            {
                "key": 355,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Hard",
                "chapter": "UNIVERSE",
                "question": "In astrobiology, scientists speculate about the possibility of extraterrestrial life in our vast universe. Discuss the conditions required for life to exist on other planets and the potential implications of discovering life beyond Earth. Provide specific examples or factors that support the existence of extraterrestrial life.",
                "solution": "Conditions required for life to exist on other planets 1. Presence of liquid water Water is essential for all known forms of life. 2. Suitable temperature range Not too hot or too cold for life to thrive. 3. Energy source Necessary for metabolism and growth. 4. Atmosphere with suitable gases Oxygen, carbon dioxide, and nitrogen are essential. 5. Stable environment Minimal natural disasters that can wipe out life forms. Potential implications of discovering extraterrestrial life 1. Expansion of our understanding of life and its origins. 2. Evolution of new technologies for space exploration. 3. Impact on religious, philosophical, and ethical beliefs. 4. Potential threats or opportunities for interstellar communication or interaction. Factors supporting the existence of extraterrestrial life 1. Discovery of extremophiles on Earth, organisms thriving in harsh conditions. 2. Existence of water ice on Mars and subsurface oceans on moons like Europa. 3. Detection of organic molecules and amino acids in space. 4. Existence of exoplanets within the habitable zone of their stars. Overall, the search for extraterrestrial life is a fascinating field that pushes the boundaries of our knowledge and imagination, with profound implications for humanity's place in the universe."
            },
            {
                "key": 179,
                "class": "CBSE 11th board",
                "subject": "biology",
                "level": "Hard",
                "chapter": "MOVING CHARGE AND MAGNETISM",
                "question": "Explain how the Biot-Savart law differs from Ampere's circuital law when determining the magnetic field due to a current-carrying conductor. Include relevant mathematical equations and principles in your answer.",
                "solution": "Answer The Biot-Savart law and Ampere's circuital law are both used to determine the magnetic field due to a current-carrying conductor, but they are based on different principles and have slightly different applications. 1. Biot-Savart law - The Biot-Savart law calculates the magnetic field at a point in space due to a current-carrying element. - Mathematically, the Biot-Savart law is given by Bdvecr fracmu04pifracI dvecl times hatrr2 where - Bdvecr is the magnetic field at a point dvecr , - mu0 is the permeability of free space, - I is the current flowing through the element, - dvecl is the length element of the current-carrying conductor, - hatr is the unit vector pointing from the current element to the point of interest, and - r is the distance between the current element and the point of interest. 2. Ampere's circuital law - Ampere's circuital law determines the total magnetic field along a closed path surrounding a current-carrying conductor. - Mathematically, Ampere's circuital law is given by oint vecB cdot dvecl mu0 Itextenclosed where - oint vecB cdot dvecl is the line integral of the magnetic field along a closed path, - mu0 is the permeability of free space, and - Itextenclosed is the total current passing through the closed path. Differences - The Biot-Savart law calculates the magnetic field at a specific point due to a current element, while Ampere's circuital law gives the total magnetic field along a closed path surrounding a current-carrying conductor. - Biot-Savart law is more suitable for calculating the magnetic field at a specific point, whereas Ampere's circuital law is better for determining the total magnetic field in a closed loop. In conclusion, the main difference between the Biot-Savart law and Ampere's circuital law lies in their scope of application the former calculates the magnetic field at a point due to a current element, while the latter determines the total magnetic field along a closed path surrounding a current-carrying conductor."
            },
            {
                "key": 342,
                "class": "JEE Main + NEET + JEE Advanced",
                "subject": "biology",
                "level": "Medium",
                "chapter": "SEMICONDUCTOR ELECTRONICS",
                "question": "Explain the concept of PN junction in semiconductor electronics and discuss its role in the functioning of a semiconductor diode.",
                "solution": "Concept of PN Junction in Semiconductor Electronics A PN junction is formed when a P-type semiconductor containing an excess of positively-charged holes is joined with an N-type semiconductor containing an excess of negatively-charged electrons. This creates a depletion region at the junction, where free carriers recombine, resulting in a barrier potential. Role in Functioning of Semiconductor Diode In a semiconductor diode, the PN junction plays a crucial role in allowing current to flow in one direction while blocking it in the other. When a forward bias voltage is applied positive terminal to P-side, negative terminal to N-side, the depletion region narrows, allowing electrons to diffuse across the junction and recombine with holes. This flow of charge carriers creates a current flow, enabling the diode to conduct electricity. Conversely, when a reverse bias voltage is applied positive terminal to N-side, negative terminal to P-side, the depletion region widens, preventing the flow of current due to the absence of free carriers. This property of the PN junction enables the semiconductor diode to act as a rectifier, allowing current to flow in only one direction. In summary, the PN junction in semiconductor electronics is essential for the functioning of a semiconductor diode by controlling the flow of current and enabling various applications such as rectification in electronic circuits."
            },
            {
                "key": 234,
                "class": "CBSE 12th board",
                "subject": "chemistry",
                "level": "Hard",
                "chapter": "WAVE OPTICS",
                "question": "In a Young's double-slit experiment, monochromatic light of wavelength 600 nm is used. The distance between the slits is 0.2 mm and the screen is placed 2 m away from the slits. If the fifth bright fringe is observed at a distance of 3.6 mm from the central maximum on the screen, calculate the distance between the central maximum and the first bright fringe. Show all calculations and explain the concept of fringe width in the context of wave optics.",
                "solution": "Given, Wavelength 600 nm 600 10-9 m Distance between slits d 0.2 mm 0.2 10-3 m Distance to screen D 2 m Position of 5th bright fringe y 3.6 mm 3.6 10-3 m Calculating the distance between the central maximum and any bright fringe in Young's double-slit experiment involves the formula y m D d where, y distance from central maximum to the mth bright fringe m order of the fringe wavelength of light D distance to screen d distance between slits For the 1st bright fringe m1 y 1 600 10-9 2 0.2 y 6 10-3 m Therefore, the distance between the central maximum and the first bright fringe is 6 mm. Explanation of fringe width in the context of wave optics In wave optics, the fringe width refers to the distance between consecutive bright or dark fringes in an interference pattern. It is determined by the wavelength of light used, the distance between the slits, and the distance to the screen. The equation y m D d shows that the fringe width decreases as the order of the fringe increases. This is because the fringes get closer together as we move away from the central maximum. The concept of fringe width is crucial in understanding the interference patterns observed in double-slit experiments, where the constructive and destructive interference of waves create alternating bright and dark fringes."
            }
        ]
    
    ]
];

db.serialize(function() {
    // Create table
    db.run("CREATE TABLE IF NOT EXISTS questions_new (key TEXT, class TEXT, level TEXT, chapter TEXT, subject TEXT, question TEXT, solution TEXT)");

    // Prepare insert statement
    const stmt = db.prepare("INSERT INTO questions (key, class, level, chapter, subject, question, solution) VALUES (?, ?, ?, ?, ?, ?, ?)");

    // Insert JSON data into table
    jsonData.forEach((item) => {
        stmt.run([item.key, item.class, item.level, item.chapter, item.subject, item.question, item.solution] , function(err) {
            if (err) {
                console.log(err.message);
            }
            console.log(`A row has been inserted with rowid ${this.lastID}`);
        });
    });

    // Finalize statement and close database
    // stmt.finalize();
    console.log('Data inserted successfully.');
});

