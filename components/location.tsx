"use client";

export default function MapComponent() {
  return (
    <div style={{ width: "100%", height: "400px" }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3722.1812986017153!2d79.00156568211807!3d21.105336987949855!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjHCsDA2JzE5LjIiTiA3OcKwMDAnMTIuMyJF!5e0!3m2!1sen!2sin!4v1745993874226!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Our Office Location"
      ></iframe>
    </div>
  );
}


