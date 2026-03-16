(function () {
    // ─── Data: Google Street View Locations ───────────────────────────────
    const gsvItems = [
        { label: "Ave Mariya Block", icon: "fa-building", sub: "Location", link: "", lat: 10.679756681260836, lng: 79.84984006086685 },
        { label: "Mass Counter & Offerings", icon: "fa-hand-holding-dollar", sub: "Location", link: "", lat: 10.679609272704539, lng: 79.84967272572477 },
        { label: "Little Flower Lodge", icon: "fa-hotel", sub: "Location", link: "", lat: 10.679661337177084, lng: 79.84964064254945 },
        { label: "Counselling Center", icon: "fa-user-doctor", sub: "Location", link: "", lat: 10.679895449499899, lng: 79.8447024776757 },
        { label: "Agnes Home Waterfall", icon: "fa-water", sub: "Location", link: "", lat: 10.680274694468265, lng: 79.85019587849077 },
        { label: "Confession Center", icon: "fa-hands-praying", sub: "Location", link: "", lat: 10.679304722102147, lng: 79.84845767121058 },
        { label: "New Adoration Church", icon: "fa-place-of-worship", sub: "Location", link: "", lat: 10.679256512357448, lng: 79.84843974728706 },
        { label: "Peter & Paul Lodge", icon: "fa-hotel", sub: "Location", link: "", lat: 10.679252438348291, lng: 79.84783283567621 },
        { label: "Infant Jesus & Luke Lodge", icon: "fa-hotel", sub: "Location", link: "", lat: 10.679969281899933, lng: 79.84777383852881 },
        { label: "Annai Parking", icon: "fa-square-parking", sub: "Location", link: "", lat: 10.68507205260103, lng: 79.84732331561815 },
        { label: "Canteen", icon: "fa-utensils", sub: "Location", link: "", lat: 10.68064090349384, lng: 79.85049674902551 },
        { label: "Vacating Counter", icon: "fa-door-open", sub: "Location", link: "", lat: 10.681790100521589, lng: 79.84767505016795 },
        { label: "Assisi Pilgrim Quarters", icon: "fa-bed", sub: "Location", link: "", lat: 10.679171568659527, lng: 79.84598465209051 },
        { label: "MC Convent", icon: "fa-building", sub: "Location", link: "", lat: 10.683616964104223, lng: 79.8420455214088 },
        { label: "Daily Food", icon: "fa-bowl-food", sub: "Location", link: "", lat: 10.680258464195914, lng: 79.85149977936447 },
        { label: "Meditation Centre", icon: "fa-hands-praying", sub: "Location", link: "", lat: 10.679985208231914, lng: 79.84457360566894 },
        { label: "Arokiya Nikethan", icon: "fa-house-chimney", sub: "Location", link: "", lat: 10.680338350792336, lng: 79.85012252899718 },
        { label: "Old Age Home", icon: "fa-house-medical", sub: "Location", link: "", lat: 10.69235683487493, lng: 79.84329017886083 },
        { label: "Stella Mary's Theater", icon: "fa-film", sub: "Location", link: "", lat: 10.680211392940333, lng: 79.84366469958142 },
        { label: "Canteen", icon: "fa-utensils", sub: "Location", link: "", lat: 10.680580251636709, lng: 79.85049913592175 },
        { label: "Old Velankanni", icon: "fa-church", sub: "Location", link: "", lat: 10.680823864787525, lng: 79.84258902882367 },
        { label: "Morning Star Church", icon: "fa-church", sub: "Location", link: "", lat: 10.681378467562244, lng: 79.84436689902715 },
        { label: "Siluvai Pathai", icon: "fa-cross", sub: "Location", link: "", lat: 10.68074999863838, lng: 79.8428878429437 },
        { label: "Wedding Hall", icon: "fa-people-group", sub: "Location", link: "", lat: 10.682275622552996, lng: 79.84405607268437 },
        { label: "Canteen", icon: "fa-utensils", sub: "Location", link: "", lat: 10.680641327644636, lng: 79.85045056559456 },
        { label: "Sacred Heart Jesus Statue", icon: "fa-person-praying", sub: "Location", link: "", lat: 10.68122177865904, lng: 79.84546138640063 },
        { label: "Gathering Shelter", icon: "fa-tent", sub: "Location", link: "", lat: 10.679977695087048, lng: 79.84460307032788 },
        { label: "Naduthittu Church", icon: "fa-church", sub: "Location", link: "", lat: 10.681967035994267, lng: 79.8487883996733 },
        { label: "Two Wheeler Parking", icon: "fa-motorcycle", sub: "Location", link: "", lat: 10.68502904744846, lng: 79.84727230547496 },
        { label: "Bonsecors Convent", icon: "fa-building", sub: "Location", link: "", lat: 10.682920498697728, lng: 79.84345281238957 },
        { label: "St. Thomas Quarters", icon: "fa-bed", sub: "Location", link: "", lat: 10.681117494112343, lng: 79.85048022715841 },
        { label: "Main Canteen", icon: "fa-utensils", sub: "Location", link: "", lat: 10.680611407510648, lng: 79.85044803304076 },
        { label: "Viyakulamatha Church", icon: "fa-church", sub: "Location", link: "", lat: 10.682804346604618, lng: 79.85005108807897 },
        { label: "Tonsure Hall", icon: "fa-scissors", sub: "Location", link: "", lat: 10.680368931838476, lng: 79.85074844772933 },
        { label: "Magilchi Matha", icon: "fa-face-smile", sub: "Location", link: "", lat: 10.691040, lng: 79.839045 },
        { label: "Uthriyamatha Lodge", icon: "fa-hotel", sub: "Location", link: "", lat: 10.684020, lng: 79.832525 },
        { label: "St. Antony Church", icon: "fa-church", sub: "Location", link: "", lat: 10.684365732877557, lng: 79.85003147425488 },
        { label: "Bishop Sundaram Lodge & Wedding Hall", icon: "fa-hotel", sub: "Location", link: "", lat: 10.684530, lng: 79.833035 },
        { label: "Marys Parking", icon: "fa-square-parking", sub: "Location", link: "", lat: 10.685402021898774, lng: 79.84677204209908 },
        { label: "Don Bosco Children Home", icon: "fa-children", sub: "Location", link: "", lat: 10.684356350553468, lng: 79.84810354175009 },
        { label: "Railway Marriage Hall", icon: "fa-people-group", sub: "Location", link: "", lat: 10.68441458960602, lng: 79.83844734523613 },
        { label: "Arogya Annai School", icon: "fa-school", sub: "Location", link: "", lat: 10.682538750060393, lng: 79.84592201368709 },
        { label: "Karunai Illam", icon: "fa-hand-holding-heart", sub: "Location", link: "", lat: 10.686966506697221, lng: 79.84234304290288 },
        { label: "Christopher Parking", icon: "fa-square-parking", sub: "Location", link: "", lat: 10.680159008226623, lng: 79.84726842213354 },
        { label: "Paul Parking", icon: "fa-square-parking", sub: "Location", link: "", lat: 10.681606847445682, lng: 79.84493324366954 },
        { label: "Tsunami Cemetery", icon: "fa-monument", sub: "Location", link: "", lat: 10.688615621527884, lng: 79.83276112873351 },
        { label: "Peter Parking", icon: "fa-square-parking", sub: "Location", link: "", lat: 10.683050, lng: 79.839055 },
        { label: "Main Arch", icon: "fa-archway", sub: "Location", link: "", lat: 10.68450876442452, lng: 79.8342115577083 },
        { label: "Infant Jesus School", icon: "fa-school", sub: "Location", link: "", lat: 10.683386321536785, lng: 79.84263538648779 },
        { label: "Madha Hospital", icon: "fa-hospital", sub: "Location", link: "", lat: 10.68344214928209, lng: 79.84416598938911 },
        { label: "Arokiya Annai School", icon: "fa-school", sub: "Location", link: "", lat: 10.682531993047292, lng: 79.84598914461857 },
        { label: "St. Joseph's Lodge", icon: "fa-hotel", sub: "Location", link: "", lat: 10.682323079378286, lng: 79.84685190038745 },
        { label: "Annai Book Center", icon: "fa-book", sub: "Location", link: "", lat: 10.67995498020684, lng: 79.85046541375586 },
        { label: "Shrine Rooms Booking", icon: "fa-key", sub: "Location", link: "", lat: 10.681764664235446, lng: 79.8476796993196 },
        { label: "Jesus Selfie Point", icon: "fa-camera", sub: "Location", link: "", lat: 10.681226262956264, lng: 79.84542468525729 },
        { label: "Priest House", icon: "fa-house-user", sub: "Location", link: "", lat: 10.67991572322218, lng: 79.85029041385302 },
        { label: "Main Church", icon: "fa-church", sub: "Location", link: "", lat: 10.680311978466932, lng: 79.85011182107561 },
        { label: "Book Stall", icon: "fa-book-open", sub: "Location", link: "", lat: 10.681941978381722, lng: 79.84367962106826 },
        { label: "Shopping Mall", icon: "fa-shop", sub: "Location", link: "", lat: 10.680126231700147, lng: 79.85094496374997 },
        { label: "Museum", icon: "fa-building-columns", sub: "Location", link: "", lat: 10.680076713831813, lng: 79.8505250472082 }
    ];


    // ─── Styles ──────────────────────────────────────────────
    const css = document.createElement('style');
    css.textContent = `
        /* ═════════════════════════════════════════════
           GSV EXPLORE MENU — Premium Navy Theme (Flat)
           Matching Panolist & Search
           ═════════════════════════════════════════════ */

        .gsv-overlay {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(30, 58, 95, 0.6); /* Navy tint backdrop */
            backdrop-filter: blur(12px);
            -webkit-backdrop-filter: blur(12px);
            z-index: 100010;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.4s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 40px;
            box-sizing: border-box;
        }

        .gsv-overlay.show {
            opacity: 1;
            pointer-events: auto;
        }

        /* ── Modal Container ── */
        .gsv-modal {
            width: 100%;
            max-width: 1100px;
            max-height: 85vh;
            background: #F8FAFC;
            border-radius: 28px;
            box-shadow: 
                0 40px 80px rgba(30, 58, 95, 0.35),
                0 0 0 1px rgba(255, 255, 255, 0.1);
            display: flex;
            flex-direction: column;
            overflow: hidden;
            transform: scale(0.96) translateY(20px);
            opacity: 0;
            transition: all 0.5s cubic-bezier(0.16, 1, 0.3, 1);
            font-family: 'Satoshi', sans-serif;
        }

        .gsv-overlay.show .gsv-modal {
            transform: scale(1) translateY(0);
            opacity: 1;
        }

        /* ── Header (Matches Panolist) ── */
        .gsv-header-premium {
            padding: 28px 40px 24px;
            background: linear-gradient(135deg, #2F5E8E 0%, #1E3A5F 100%);
            display: flex;
            justify-content: space-between;
            align-items: center;
            position: relative;
            flex-shrink: 0;
        }
        .gsv-header-premium::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0; height: 3px;
            background: linear-gradient(90deg, #96C0E6, #2E8B57, #F47C20);
        }
        
        .gsv-header-content h2 {
            margin: 0;
            font-size: 26px;
            font-weight: 800;
            color: #FFFFFF;
            letter-spacing: -0.02em;
            display: flex;
            align-items: center;
            gap: 12px;
        }
        .gsv-header-content p {
            margin: 6px 0 0 40px; /* Align with text */
            font-size: 14px;
            color: rgba(255, 255, 255, 0.6);
            font-weight: 500;
        }

        /* Circle Close Button */
        .gsv-close-btn-premium {
            width: 44px; height: 44px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.8);
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: all 0.2s;
        }
        .gsv-close-btn-premium:hover {
            background: #FFFFFF;
            color: #2F5E8E;
            transform: rotate(90deg);
        }

        /* ── Grid Area ── */
        .gsv-grid-premium {
            padding: 32px 40px;
            overflow-y: auto;
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
            gap: 20px;
        }
        
        .gsv-grid-premium::-webkit-scrollbar { width: 6px; }
        .gsv-grid-premium::-webkit-scrollbar-track { background: transparent; }
        .gsv-grid-premium::-webkit-scrollbar-thumb {
            background: rgba(47, 94, 142, 0.15);
            border-radius: 100px;
        }

        /* ── Card Styles ── */
        .gsv-loc-card {
            background: #FFFFFF;
            border-radius: 18px;
            padding: 24px 20px;
            border: 1px solid #E2E8F0;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            gap: 14px;
            cursor: pointer;
            position: relative;
            transition: all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
            opacity: 0;
            animation: cardPop 0.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            text-decoration: none; /* remove link underline if a tag */
        }

        @keyframes cardPop {
            from { opacity: 0; transform: scale(0.9); }
            to { opacity: 1; transform: scale(1); }
        }

        .gsv-loc-card:hover {
            transform: translateY(-6px);
            box-shadow: 
                0 15px 35px rgba(30, 58, 95, 0.12),
                0 0 0 2px rgba(150, 192, 230, 0.4);
            border-color: transparent;
            z-index: 10;
        }

        .gsv-loc-icon-box {
            width: 54px; height: 54px;
            border-radius: 16px;
            background: #F1F5F9;
            color: #64748B;
            display: grid;
            place-items: center;
            font-size: 22px;
            transition: all 0.3s;
            position: relative;
            overflow: hidden;
        }
        
        /* Gradient overlay on hover */
        .gsv-loc-icon-box::before {
            content: '';
            position: absolute;
            top: 0; left: 0; width: 100%; height: 100%;
            background: linear-gradient(135deg, #2F5E8E, #96C0E6);
            opacity: 0;
            transition: opacity 0.3s;
            z-index: 0;
        }
        .gsv-loc-card:hover .gsv-loc-icon-box::before { opacity: 1; }
        .gsv-loc-card:hover .gsv-loc-icon-box i { color: #fff; transform: scale(1.1); z-index: 1; }
        .gsv-loc-icon-box i { transition: transform 0.3s; z-index: 1; }

        .gsv-loc-title {
            font-size: 15px;
            font-weight: 700;
            color: #0F172A;
            line-height: 1.35;
        }
        .gsv-loc-sub {
            font-size: 12px;
            font-weight: 400;
            color: #94A3B8;
            background: #F8FAFC;
            padding: 4px 10px;
            border-radius: 100px;
            display: inline-block;
        }

        /* ── Footer ── */
        .gsv-footer-premium {
            padding: 16px 40px;
            background: #FFFFFF;
            border-top: 1px solid #F1F5F9;
            display: flex;
            align-items: center;
            gap: 8px;
            flex-shrink: 0;
        }
        .gsv-footer-dot {
            width: 6px; height: 6px;
            border-radius: 50%;
            background: #2E8B57;
            box-shadow: 0 0 6px rgba(46, 139, 87, 0.4);
            animation: pulse 2s infinite;
        }
        .gsv-footer-text {
            font-size: 11px;
            color: #64748B;
            font-weight: 400;
            letter-spacing: 0.5px;
        }

        /* Animation Keys */
        @keyframes pulse {
            0% { transform: scale(0.95); opacity: 0.7; }
            50% { transform: scale(1.1); opacity: 1; }
            100% { transform: scale(0.95); opacity: 0.7; }
        }

        /* ═══════════════════════════════════════════════
           GSV ACTION BOX — Premium Bottom Sheet
           ═══════════════════════════════════════════════ */
        .gsv-action-backdrop {
            position: fixed;
            top: 0; left: 0; width: 100%; height: 100%;
            background: rgba(30, 58, 95, 0.55);
            backdrop-filter: blur(8px);
            -webkit-backdrop-filter: blur(8px);
            z-index: 100020;
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s cubic-bezier(0.16, 1, 0.3, 1);
            display: flex;
            align-items: center;
            justify-content: center;
        }
        .gsv-action-backdrop.show {
            opacity: 1;
            pointer-events: auto;
        }

        .gsv-action-box {
            width: 92%;
            max-width: 420px;
            background: #FFFFFF;
            border-radius: 24px;
            box-shadow:
                0 32px 64px rgba(30, 58, 95, 0.3),
                0 0 0 1px rgba(47, 94, 142, 0.06);
            overflow: hidden;
            transform: translateY(30px) scale(0.95);
            opacity: 0;
            transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-family: 'Satoshi', sans-serif;
        }
        .gsv-action-backdrop.show .gsv-action-box {
            transform: translateY(0) scale(1);
            opacity: 1;
        }

        /* Action Box Header */
        .gsv-ab-header {
            padding: 28px 28px 20px;
            background: linear-gradient(135deg, #2F5E8E 0%, #1E3A5F 100%);
            position: relative;
            text-align: center;
        }
        .gsv-ab-header::after {
            content: '';
            position: absolute;
            bottom: 0; left: 0; right: 0;
            height: 3px;
            background: linear-gradient(90deg, #96C0E6, #2E8B57, #F47C20);
        }
        .gsv-ab-close {
            position: absolute;
            top: 16px; right: 16px;
            width: 32px; height: 32px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.15);
            color: rgba(255, 255, 255, 0.7);
            display: grid;
            place-items: center;
            cursor: pointer;
            transition: all 0.25s;
            font-size: 13px;
        }
        .gsv-ab-close:hover {
            background: rgba(255, 255, 255, 0.25);
            color: #fff;
            transform: rotate(90deg);
        }
        .gsv-ab-icon-wrap {
            width: 64px; height: 64px;
            border-radius: 18px;
            background: rgba(150, 192, 230, 0.15);
            border: 1px solid rgba(150, 192, 230, 0.25);
            display: grid;
            place-items: center;
            margin: 0 auto 16px;
            font-size: 26px;
            color: #96C0E6;
            transition: all 0.3s;
        }
        .gsv-ab-name {
            font-size: 20px;
            font-weight: 800;
            color: #FFFFFF;
            letter-spacing: -0.3px;
            line-height: 1.3;
            margin-bottom: 6px;
        }
        .gsv-ab-sub {
            display: inline-block;
            font-size: 12px;
            font-weight: 600;
            color: rgba(255, 255, 255, 0.5);
            background: rgba(255, 255, 255, 0.08);
            padding: 4px 14px;
            border-radius: 100px;
            letter-spacing: 0.5px;
        }

        /* Action Box Body */
        .gsv-ab-body {
            padding: 24px 28px 28px;
            display: flex;
            flex-direction: column;
            gap: 12px;
        }

        .gsv-ab-action-btn {
            display: flex;
            align-items: center;
            gap: 16px;
            padding: 16px 20px;
            border-radius: 16px;
            border: 1px solid #E2E8F0;
            background: #FFFFFF;
            cursor: pointer;
            transition: all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);
            font-family: inherit;
            text-align: left;
            width: 100%;
        }
        .gsv-ab-action-btn:hover {
            border-color: transparent;
            transform: translateY(-2px);
            box-shadow: 0 8px 24px rgba(30, 58, 95, 0.1);
        }
        .gsv-ab-action-btn:active {
            transform: scale(0.98);
        }

        .gsv-ab-action-icon {
            width: 48px; height: 48px;
            border-radius: 14px;
            display: grid;
            place-items: center;
            font-size: 18px;
            flex-shrink: 0;
            transition: all 0.3s;
        }

        /* View Street View button styling */
        .gsv-ab-btn-tour .gsv-ab-action-icon {
            background: linear-gradient(135deg, #2F5E8E, #96C0E6);
            color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(150, 192, 230, 0.3);
        }
        .gsv-ab-btn-tour:hover {
            background: #F0F9FF;
            border-color: rgba(150, 192, 230, 0.3);
        }

        /* Direction button styling */
        .gsv-ab-btn-direction .gsv-ab-action-icon {
            background: linear-gradient(135deg, #2F5E8E, #1E3A5F);
            color: #FFFFFF;
            box-shadow: 0 4px 14px rgba(47, 94, 142, 0.25);
        }
        .gsv-ab-btn-direction:hover {
            background: #F0F4FF;
            border-color: rgba(47, 94, 142, 0.2);
        }

        .gsv-ab-action-text {
            flex: 1;
        }
        .gsv-ab-action-label {
            font-size: 15px;
            font-weight: 700;
            color: #1E3A5F;
            margin-bottom: 2px;
        }
        .gsv-ab-action-desc {
            font-size: 12px;
            color: #94A3B8;
            font-weight: 500;
        }
        .gsv-ab-action-arrow {
            font-size: 12px;
            color: #CBD5E1;
            transition: all 0.25s;
        }
        .gsv-ab-action-btn:hover .gsv-ab-action-arrow {
            transform: translateX(4px);
            color: #96C0E6;
        }

        /* Responsive */
        @media (max-width: 768px) {
            .gsv-overlay { padding: 8px; }
            .gsv-modal { border-radius: 20px; max-height: 95vh; }
            .gsv-header-premium { padding: 20px; }
            .gsv-grid-premium { padding: 20px; grid-template-columns: 1fr 1fr; gap: 12px; }
            .gsv-header-content h2 { font-size: 20px; }
            .gsv-header-content p { margin-left: 0; font-size: 13px; }
            .gsv-loc-card { padding: 16px; gap: 10px; }
            .gsv-loc-icon-box { width: 44px; height: 44px; font-size: 18px; }
            .gsv-loc-title { font-size: 13px; }
            .gsv-loc-sub { font-size: 10px; padding: 2px 8px; }

            .gsv-action-box { max-width: 100%; border-radius: 20px; }
            .gsv-ab-header { padding: 24px 20px 18px; }
            .gsv-ab-icon-wrap { width: 56px; height: 56px; font-size: 22px; border-radius: 14px; }
            .gsv-ab-name { font-size: 18px; }
            .gsv-ab-body { padding: 20px; gap: 10px; }
            .gsv-ab-action-btn { padding: 14px 16px; }
            .gsv-ab-action-icon { width: 42px; height: 42px; font-size: 16px; }
        }
        @media (max-width: 380px) {
            .gsv-grid-premium { grid-template-columns: 1fr; gap: 10px; padding: 16px; }
            .gsv-footer-premium { padding: 12px 16px; }
        }
    `;
    document.head.appendChild(css);

    // ─── Builder ───
    const overlay = document.createElement('div');
    overlay.className = 'gsv-overlay';

    // Generate Cards
    let cardsHTML = '';
    gsvItems.forEach((item, index) => {
        const delay = Math.min(index * 25, 500);

        cardsHTML += `
            <div class="gsv-loc-card" style="animation-delay: ${delay}ms" data-index="${index}">
                <div class="gsv-loc-icon-box"><i class="fa-solid ${item.icon}"></i></div>
                <div class="gsv-loc-title">${item.label}</div>
                <div class="gsv-loc-sub">${item.sub}</div>
            </div>
        `;
    });

    overlay.innerHTML = `
        <div class="gsv-modal">
            <div class="gsv-header-premium">
                <div class="gsv-header-content">
                    <h2><i class="fa-solid fa-street-view"></i> Google Street View</h2>
                    <p>Select a location to explore in Street View</p>
                </div>
                <button class="gsv-close-btn-premium" id="gsv_close_btn">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <line x1="18" y1="6" x2="6" y2="18"></line>
                        <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                </button>
            </div>
            
            <div class="gsv-grid-premium">
                ${cardsHTML}
            </div>

            <div class="gsv-footer-premium">
                <div class="gsv-footer-dot"></div>
                <span class="gsv-footer-text">Mount Zion Matric Higher Secondary School Street View</span>
            </div>
        </div>
    `;

    document.body.appendChild(overlay);

    // ─── Action Box (appended to body) ───
    const gsvActionBackdrop = document.createElement('div');
    gsvActionBackdrop.className = 'gsv-action-backdrop';
    gsvActionBackdrop.innerHTML = `
        <div class="gsv-action-box">
            <div class="gsv-ab-header">
                <button class="gsv-ab-close" id="gsv-ab-close"><i class="fa-solid fa-xmark"></i></button>
                <div class="gsv-ab-icon-wrap" id="gsv-ab-icon"><i class="fa-solid fa-street-view"></i></div>
                <div class="gsv-ab-name" id="gsv-ab-name">Location Name</div>
                <div class="gsv-ab-sub" id="gsv-ab-sub">Category</div>
            </div>
            <div class="gsv-ab-body">
                <button class="gsv-ab-action-btn gsv-ab-btn-tour" id="gsv-ab-tour">
                    <div class="gsv-ab-action-icon"><i class="fa-solid fa-street-view"></i></div>
                    <div class="gsv-ab-action-text">
                        <div class="gsv-ab-action-label">View Street View</div>
                        <div class="gsv-ab-action-desc">Explore in Google Street View</div>
                    </div>
                    <i class="fa-solid fa-arrow-right gsv-ab-action-arrow"></i>
                </button>
                <button class="gsv-ab-action-btn gsv-ab-btn-direction" id="gsv-ab-direction">
                    <div class="gsv-ab-action-icon"><i class="fa-solid fa-diamond-turn-right"></i></div>
                    <div class="gsv-ab-action-text">
                        <div class="gsv-ab-action-label">Get Direction</div>
                        <div class="gsv-ab-action-desc">Open in Google Maps</div>
                    </div>
                    <i class="fa-solid fa-arrow-right gsv-ab-action-arrow"></i>
                </button>
            </div>
        </div>
    `;
    document.body.appendChild(gsvActionBackdrop);

    // ─── Action Box State ───
    let currentGsvItem = null;

    function showGsvActionBox(item) {
        currentGsvItem = item;
        document.getElementById('gsv-ab-icon').innerHTML = `<i class="fa-solid ${item.icon}"></i>`;
        document.getElementById('gsv-ab-name').textContent = item.label;
        document.getElementById('gsv-ab-sub').textContent = item.sub;
        gsvActionBackdrop.classList.add('show');
    }

    function hideGsvActionBox() {
        gsvActionBackdrop.classList.remove('show');
        currentGsvItem = null;
    }

    // ─── Card Click → Show Action Box ───
    overlay.querySelectorAll('.gsv-loc-card').forEach(card => {
        card.addEventListener('click', () => {
            const index = parseInt(card.dataset.index, 10);
            const item = gsvItems[index];
            if (item) showGsvActionBox(item);
        });
    });

    // ─── Action Box Buttons ───
    document.getElementById('gsv-ab-tour').addEventListener('click', () => {
        if (!currentGsvItem) return;
        if (currentGsvItem.link) {
            window.open(currentGsvItem.link, '_blank');
        } else {
            console.log(`No Street View link for ${currentGsvItem.label}`);
        }
        hideGsvActionBox();
        window.toggleGsvPanel(false);
    });

    document.getElementById('gsv-ab-direction').addEventListener('click', () => {
        if (!currentGsvItem) return;
        const dest = encodeURIComponent(currentGsvItem.label + ', Mount Zion Matric Higher Secondary School');
        let url = `https://www.google.com/maps/dir/?api=1&destination=${dest}`;
        if (window.userLocation) {
            url += `&origin=${window.userLocation.lat},${window.userLocation.lng}`;
        }
        window.open(url, '_blank');
        hideGsvActionBox();
    });

    // ─── Action Box Close ───
    document.getElementById('gsv-ab-close').addEventListener('click', hideGsvActionBox);
    gsvActionBackdrop.addEventListener('click', (e) => {
        if (e.target === gsvActionBackdrop) hideGsvActionBox();
    });

    // ─── Logic ───
    window.toggleGsvPanel = function (show) {
        if (show) {
            overlay.classList.add('show');
            document.dispatchEvent(new CustomEvent('gsvActive'));
        } else {
            overlay.classList.remove('show');
            hideGsvActionBox();
            document.dispatchEvent(new CustomEvent('gsvDeactive'));
            document.dispatchEvent(new CustomEvent('menuItemDeactivate', { detail: { id: 'menu-street-view' } }));
        }
    };

    document.getElementById('gsv_close_btn').addEventListener('click', () => window.toggleGsvPanel(false));
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) window.toggleGsvPanel(false);
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === 'Escape') {
            if (gsvActionBackdrop.classList.contains('show')) { hideGsvActionBox(); return; }
            if (overlay.classList.contains('show')) window.toggleGsvPanel(false);
        }
    });

    // Listen for menu click from menu.js
    document.addEventListener('menuItemClick', (e) => {
        if (e.detail && e.detail.id === 'menu-street-view') window.toggleGsvPanel(true);
    });

})();
