#!/bin/bash
cd docs
mkdir pdf

cat <<EOF > pdf/README.md
---
home: true
title: Zusammenfassung
heroImage: /images/website/hero.jpg
---
<hr/>

EOF

echo "::: tip Zusammenfassung drucken" >>pdf/README.md
echo "Auf drucken und dann als PDF speichern." >>pdf/README.md
echo ":::" >>pdf/README.md
cat basics/README.md film-analyse/README.md bildgestaltung/README.md kamera/README.md dreh/README.md schnitt/README.md feedback/README.md lexikon/README.md >>pdf/README.md