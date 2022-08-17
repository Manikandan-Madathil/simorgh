import React from 'react';
import build from '.';

export default build({
  width: 1750,
  height: 425,
  group: (
    <>
      <path d="M759.928 265.75a4646.67 4646.67 0 00-23.49-37.242 2633.129 2633.129 0 00-23.49-36.2v73.442h-22.003V159.452h23.192a2668.556 2668.556 0 0123.714 36.052 2774.159 2774.159 0 0123.266 36.647v-72.699h22.003V265.75h-23.192zM804.187 159.452h73.145v19.03h-50.25v23.044h44.6v19.029h-44.6v26.166h53.075v19.03h-75.97V159.451zM982.1 265.75a3174.441 3174.441 0 01-9.885-35.978 3159.855 3159.855 0 01-9.441-35.977 2391.54 2391.54 0 01-9.218 35.977 2452.296 2452.296 0 01-9.811 35.978H919.51a2032.839 2032.839 0 01-14.57-52.628c-4.659-17.74-9.068-35.63-13.23-53.67h24.975a2003.215 2003.215 0 007.88 41.33 1444.404 1444.404 0 008.771 40.586 3259.894 3259.894 0 0018.882-77.456h22.3a3251.95 3251.95 0 0018.732 75.821 1999.976 1999.976 0 008.623-39.843 1455.41 1455.41 0 007.73-40.438h24.531a1845.28 1845.28 0 01-13.231 53.67 2041.61 2041.61 0 01-14.57 52.628h-24.233zM1077.471 267.98c-5.85 0-11.622-.645-17.32-1.932a66.227 66.227 0 01-16.428-6.096v-20.516c10.604 6.444 21.854 9.663 33.748 9.663 6.74 0 11.868-1.138 15.387-3.419 3.517-2.28 5.278-5.45 5.278-9.515 0-3.07-.868-5.475-2.602-7.21-1.735-1.733-4.04-3.122-6.913-4.163-2.876-1.04-6.095-2.007-9.663-2.899-5.85-1.387-11.002-2.974-15.462-4.757-4.46-1.784-8.228-3.889-11.299-6.319-3.073-2.427-5.403-5.352-6.987-8.771-1.587-3.42-2.379-7.508-2.379-12.265 0-6.74 1.71-12.537 5.13-17.395 3.419-4.855 8.25-8.597 14.495-11.225 6.244-2.624 13.677-3.939 22.3-3.939 5.65 0 11.2.646 16.65 1.933 5.45 1.289 10.357 3.024 14.72 5.203v20.22c-4.363-2.677-9.293-4.758-14.793-6.245-5.501-1.487-11.027-2.23-16.577-2.23-6.047 0-10.73 1.04-14.049 3.122-3.322 2.081-4.98 5.055-4.98 8.92 0 2.776.791 4.98 2.378 6.616 1.584 1.635 3.84 2.973 6.765 4.014 2.922 1.04 6.367 2.058 10.332 3.047 5.055 1.29 9.76 2.702 14.124 4.238 4.36 1.537 8.2 3.493 11.521 5.872 3.32 2.379 5.896 5.403 7.731 9.069 1.833 3.668 2.75 8.177 2.75 13.529 0 7.038-1.735 13.06-5.203 18.063-3.47 5.006-8.474 8.823-15.015 11.447-6.542 2.626-14.421 3.94-23.639 3.94z" />
      <path d="M141.733 141.732v141.733h141.732V141.732H141.733zm98.838 100.024c-2.422 3.42-5.872 6.06-10.352 7.917-4.482 1.859-9.865 2.788-16.153 2.788h-31.763v-79.725h29.92c8.817 0 15.646 1.767 20.489 5.297 4.841 3.531 7.263 8.604 7.263 15.22 0 3.79-.867 7.08-2.602 9.868-1.734 2.787-4.3 5-7.697 6.634 4.698 1.561 8.294 4.033 10.787 7.415 2.494 3.383 3.74 7.49 3.74 12.321 0 4.758-1.211 8.847-3.632 12.265zm-20.271-38.97c2.203-1.82 3.306-4.366 3.306-7.638 0-6.317-4.301-9.477-12.9-9.477h-12.25v19.847h12.25c4.19 0 7.388-.91 9.594-2.732zm-7.535 15.22h-14.309v21.52h14.093c4.84 0 8.564-.91 11.165-2.731 2.602-1.821 3.903-4.441 3.903-7.861 0-7.285-4.951-10.928-14.852-10.928zM318.898 141.732v141.733H460.63V141.732H318.898zm98.839 100.024c-2.422 3.42-5.873 6.06-10.353 7.917-4.482 1.859-9.865 2.788-16.152 2.788h-31.763v-79.725h29.92c8.816 0 15.646 1.767 20.488 5.296 4.841 3.532 7.264 8.605 7.264 15.22 0 3.792-.868 7.081-2.602 9.869-1.735 2.787-4.301 5-7.697 6.634 4.697 1.56 8.293 4.033 10.786 7.415 2.494 3.383 3.74 7.49 3.74 12.321 0 4.758-1.21 8.847-3.631 12.265zm-20.272-38.97c2.204-1.82 3.307-4.366 3.307-7.638 0-6.317-4.302-9.477-12.901-9.477h-12.25v19.847h12.25c4.19 0 7.389-.91 9.594-2.732zm-7.534 15.22h-14.31v21.52h14.093c4.841 0 8.564-.91 11.166-2.732 2.601-1.82 3.902-4.44 3.902-7.86 0-7.285-4.95-10.928-14.851-10.928zM496.063 283.465h141.733V141.732H496.063v141.733zm101.794-36.057c-3.303 1.822-7.128 3.261-11.478 4.316-4.352 1.056-8.93 1.586-13.73 1.586-6.377 0-12.116-.93-17.217-2.787-5.102-1.858-9.415-4.536-12.94-8.033-3.528-3.498-6.228-7.777-8.103-12.842-1.875-5.063-2.813-10.766-2.813-17.105 0-6.192.974-11.784 2.926-16.776 1.95-4.99 4.763-9.271 8.44-12.842 3.674-3.569 8.082-6.301 13.222-8.197 5.138-1.893 10.896-2.841 17.273-2.841 4.426 0 8.609.456 12.548 1.366 3.938.912 7.595 2.24 10.971 3.99v15.518a36.771 36.771 0 00-10.015-4.644c-3.6-1.056-7.39-1.585-11.365-1.585-5.477 0-10.148 1.021-14.01 3.06-3.865 2.04-6.828 4.992-8.89 8.853-2.065 3.863-3.095 8.562-3.095 14.098 0 5.539.993 10.257 2.982 14.154 1.987 3.898 4.876 6.868 8.665 8.907 3.788 2.04 8.383 3.06 13.785 3.06 8.252 0 15.866-2.148 22.844-6.448v15.192z" />
      <path d="M1174.47868 185.00457L1200.45817 185.00457 1200.45817 252.46258 1214.61833 252.46258 1214.61833 185.00457 1240.5988 185.00457 1240.5988 172.73992 1174.47868 172.73992 1174.47868 185.00457z" />
      <path d="M1271.706 164.043c2.23 0 3.995-.65 5.297-1.952 1.3-1.3 1.951-2.99 1.951-5.073 0-2.302-.651-4.031-1.95-5.184-1.303-1.152-3.067-1.729-5.298-1.729-2.156 0-3.885.577-5.184 1.729-1.301 1.153-1.952 2.882-1.952 5.184 0 2.082.65 3.774 1.952 5.073 1.3 1.302 3.028 1.952 5.184 1.952zM1304.934 222.134c0 6.394-1.673 11.28-5.018 14.663-3.345 3.383-8.066 5.073-14.16 5.073-6.097 0-10.799-1.69-14.105-5.073-3.308-3.382-4.962-8.269-4.962-14.663V172.74h-14.16v47.834c0 6.987 1.319 12.99 3.957 18.007 2.638 5.017 6.43 8.864 11.374 11.54 4.943 2.677 10.908 4.014 17.896 4.014 6.985 0 12.951-1.337 17.896-4.014 4.942-2.676 8.752-6.523 11.428-11.54s4.014-11.02 4.014-18.007V172.74h-14.16v49.394zM1299.916 164.043c2.23 0 3.995-.65 5.296-1.952 1.3-1.3 1.951-2.99 1.951-5.073 0-2.302-.651-4.031-1.95-5.184-1.302-1.152-3.066-1.729-5.297-1.729-2.082 0-3.79.577-5.129 1.729-1.338 1.153-2.007 2.882-2.007 5.184 0 2.082.67 3.774 2.007 5.073 1.338 1.302 3.047 1.952 5.13 1.952zM1376.74 219.347c4.98-1.857 8.809-4.664 11.485-8.419 2.676-3.752 4.014-8.268 4.014-13.546 0-7.878-2.75-13.956-8.25-18.231-5.502-4.273-13.42-6.411-23.75-6.411h-27.43v79.723h13.938v-30.551h13.38c.965 0 1.896-.037 2.787-.112 3.122 5.13 6.189 10.221 9.2 15.276a619.83 619.83 0 018.864 15.387h16.278a725.783 725.783 0 00-10.146-16.837 877.39 877.39 0 00-10.37-16.279zm-3.456-11.875c-3.122 2.118-7.768 3.178-13.937 3.178h-12.6v-26.648h12.711c6.094 0 10.704 1.078 13.826 3.233 3.122 2.156 4.683 5.538 4.683 10.147s-1.56 7.972-4.683 10.09zM1438.177 210.427c6.095-6.317 12.098-12.6 18.008-18.843a1178.752 1178.752 0 0017.449-18.844h-17.17a1570.035 1570.035 0 01-14.496 16.056 737.065 737.065 0 01-15.387 16.279h-4.348V172.74h-14.16v79.723h14.16v-35.68h4.126a947.915 947.915 0 0116.39 17.895 2853.38 2853.38 0 0115.72 17.785h18.287a1423.099 1423.099 0 00-19.289-21.297 4990.152 4990.152 0 00-19.29-20.739z" />
      <path d="M1501.342 238.414c-3.978-2.304-7.025-5.631-9.144-9.98s-3.177-9.644-3.177-15.888c0-6.095 1.077-11.335 3.233-15.722 2.155-4.385 5.258-7.73 9.31-10.035 4.051-2.303 8.938-3.456 14.663-3.456 4.162 0 8.12.595 11.875 1.784 3.753 1.19 7.191 2.898 10.313 5.129v-13.269a44.963 44.963 0 00-10.982-4.404c-3.903-1.004-8.084-1.506-12.544-1.506-6.244 0-11.858.967-16.837 2.9-4.98 1.933-9.236 4.721-12.767 8.362-3.53 3.643-6.244 8.01-8.14 13.101-1.895 5.092-2.842 10.798-2.842 17.116 0 6.466.91 12.284 2.731 17.449 1.82 5.168 4.442 9.534 7.862 13.101 3.418 3.569 7.598 6.3 12.543 8.196 3.935 1.509 8.292 2.407 13.052 2.715l-2.962 11.501c.818-.15 1.785-.279 2.9-.39s2.191-.167 3.233-.167c3.94 0 5.91 1.187 5.91 3.567 0 2.304-2.007 3.457-6.021 3.457a20.22 20.22 0 01-4.46-.502 29.575 29.575 0 01-4.237-1.282v7.47c1.486.52 3.047.892 4.683 1.116a37.99 37.99 0 005.13.334c4.384 0 7.84-.93 10.368-2.787 2.527-1.86 3.791-4.424 3.791-7.693 0-2.975-1.022-5.316-3.066-7.026-2.045-1.71-4.85-2.564-8.418-2.564h-.669l1.361-5.04a54.257 54.257 0 009.788-1.538c4.386-1.116 8.213-2.676 11.486-4.683v-12.935c-7.064 4.684-14.905 7.025-23.528 7.025-5.649 0-10.462-1.152-14.438-3.456z" />
      <path d="M1566.84782 240.53191L1566.84782 217.2282 1601.74724 217.2282 1601.74724 205.29754 1566.84782 205.29754 1566.84782 184.67059 1605.98357 184.67059 1605.98357 172.73992 1552.68767 172.73992 1552.68767 252.46258 1608.10271 252.46258 1608.10271 240.53191 1566.84782 240.53191z" />
    </>
  ),
});
